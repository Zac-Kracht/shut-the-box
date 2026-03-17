import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'


function Game({count, onExitButtonClick}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("roll");
    const [ showTotal, setShowTotal ] = useState(false);

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
                <input type="checkbox" disabled={gameState == "play" ? false : true} />
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
        setGameState("roll");
        setShowTotal(false);
    }

    // Final component
    return (
      <div className="flex justify-center">
        <FontAwesomeIcon icon={diceMap[diceRoll[0]]} size="2xl" />
        <FontAwesomeIcon icon={diceMap[diceRoll[1]]} size="2xl" />
        <button className={buttonClass} onClick={onRollClick} disabled={gameState == "roll" ? false : true}>
            Roll 2 dice
        </button>
        <button className={buttonClass} onClick={onExitButtonClick}>
            Exit
        </button>
        {showTotal && <p>Total: {diceRoll[0] + diceRoll[1]}</p>}
        <form>
            {checkBoxes}
            <input type="submit" className={buttonClass} onClick={onSubmit} disabled={gameState == "play" ? false : true} />
        </form>
      </div>
    )
}
  
export default Game