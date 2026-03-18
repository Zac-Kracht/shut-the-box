import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'


function Game({count, onExitButtonClick}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("roll");
    const [ showTotal, setShowTotal ] = useState(false);
    const [ tileEnabled, setTileEnabled ] = useState(Array(count).fill(true));

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
        checkBoxes.push(
            <label key={i.toString()}>
                <input type="checkbox" name="tile" value={i} disabled={!tileEnabled[i-1]} />
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
                console.log(`Rolled ${diceRoll[0] + diceRoll[1]}`);
            }
        }, rollDelay);
    }

    function onSubmit(formData) {
        // event.preventDefault();
        const checkedTiles = formData.getAll('tile');

        if (isSumValid(checkedTiles)) {
            setTileEnabled(prevTileEnabled => {
                return prevTileEnabled.map((enabled, i) => {
                    return checkedTiles.includes((i+1).toString()) ? false : enabled;
                });
            });
            setGameState("roll");
            setShowTotal(false);

            console.log(`Submitted valid sum [${checkedTiles}]. GameOver=${allTilesDown()}`);
        } else {
            console.log(`Submitted invalid sum [${checkedTiles}]`)
        }
    }

    // Helper functions
    function isSumValid(checkedTiles) {
        const sum = checkedTiles.reduce(
            (sum, val) => sum + parseInt(val, 10)
        , 0);
        return sum === (diceRoll[0] + diceRoll[1]) ? true : false;
    }

    function allTilesDown() {
        return tileEnabled.reduce((sum, val) => sum && !val, true)
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
        <form action={onSubmit} >
            {checkBoxes}
            <input type="submit" className={buttonClass} disabled={gameState == "play" ? false : true} />
        </form>
      </div>
    )
}
  
export default Game