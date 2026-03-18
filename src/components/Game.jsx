import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'


function Game({count, onExitButtonClick}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("roll");
    const [ showTotal, setShowTotal ] = useState(false);
    const [ tileStates, setTileStates ] = useState(
        Array(count).fill({
            "enabled": true,
            "checked": false
        })
    );

    // Render constants
    const numRollsPerAnimation = 6;
    const rollDelay = 100;
    const diceMap = {
        1: faDiceOne,
        2: faDiceTwo,
        3: faDiceThree,
        4: faDiceFour,
        5: faDiceFive,
        6: faDiceSix,
    };
    const buttonClass = "w-32 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700";

    // Render variables
    let checkBoxes = []
    for (let i = 1; i <= count; i++) {
        const isDisabled = !tileStates[i-1].enabled;
        const isChecked = tileStates[i-1].checked;
        checkBoxes.push(
            <label key={i.toString()}>
                <input type="checkbox" name="tile" value={i} disabled={isDisabled} checked={isChecked} onChange={onCheckBoxChange} />
                {i}
            </label>
        );
    }

    // Event handlers
    function onRollClick() {
        setGameState("play");

        let rolls = 0;
        const interval = setInterval(() => {
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;

            setDiceRoll([dice1, dice2]);

            rolls++;
            if (rolls >= numRollsPerAnimation) {
                clearInterval(interval);
                setShowTotal(true);
            }
        }, rollDelay);
    }

    function onSubmit(event) {
        event.preventDefault();

        // const data = new FormData(event.currentTarget);
        // const selectedTiles = data.getAll("tile");

        setTileStates(prevTileStates => {
            return prevTileStates.map(tile => {
                return {
                    "enabled": tile.checked ? false : tile.enabled,
                    "checked": false
                }
            });
        });
        setGameState("roll");
        setShowTotal(false);
    }

    function onCheckBoxChange(event) {
        const {name, checked, value} = event.target;

        // change title state of current event tile to checked or unchecked
        setTileStates(prevTileStates => {
            return prevTileStates.map((tile, i) => {
                if (i === parseInt(value, 10) - 1) {
                    return {
                        ...tile,
                        "checked": checked ? true : false
                    }
                } else {
                    return {...tile}
                }
            });
        });
    }

    // Helper functions
    function isSumValid() {
        const sum = tileStates.reduce(
            (sum, val, i) => sum + (val.checked ? i+1 : 0)
        , 0);
        return sum === (diceRoll[0] + diceRoll[1]) ? true : false;
    }

    // Final component
    return (
      <div className="flex justify-center">
        <FontAwesomeIcon icon={diceMap[diceRoll[0]]} size="2xl" />
        <FontAwesomeIcon icon={diceMap[diceRoll[1]]} size="2xl" />
        <button className={buttonClass} onClick={onRollClick} disabled={gameState == "roll" ? false : true}>
            Roll 2 dice
        </button>
        <button className={buttonClass}>
            Help
        </button>
        <button className={buttonClass} onClick={onExitButtonClick}>
            Exit
        </button>
        {showTotal && <p>Total: {diceRoll[0] + diceRoll[1]}</p>}
        <form onSubmit={onSubmit} >
            {checkBoxes}
            <input type="submit" className={buttonClass} disabled={gameState == "play" && isSumValid() ? false : true} />
        </form>
      </div>
    )
}
  
export default Game