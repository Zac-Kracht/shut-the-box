import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as GameUtils from '../utils/utils.js'
import * as GameConstants from '../utils/constants.js'


function Game({count, onExitButtonClick}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("roll");
    const [ showTotal, setShowTotal ] = useState(false);
    const [ tileEnabled, setTileEnabled ] = useState(Array(count).fill(true));

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
    function onRollClick(event) {
        const buttonName = event.currentTarget.name;

        let rolls = 0;
        const interval = setInterval(() => {
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;

            const nextDiceRoll = buttonName == "rollTwo" ? [dice1, dice2] : [dice1]
            setDiceRoll(nextDiceRoll);

            rolls++;
            if (rolls >= GameConstants.NUM_ROLLS_PER_ANIMATION) {
                clearInterval(interval);
                setShowTotal(true);
                setGameState(GameUtils.isPlayPossible(tileEnabled, nextDiceRoll) ? "play" : "game-over");
            }
        }, GameConstants.ROLL_ANIMATON_DELAY);
    }

    function onSubmit(formData) {
        const checkedTiles = formData.getAll('tile');

        if (GameUtils.isSumValid(checkedTiles, diceRoll)) {
            const nextTileEnabled = tileEnabled.map((enabled, i) => {
                return checkedTiles.includes((i+1).toString()) ? false : enabled;
            });
            setTileEnabled(nextTileEnabled);
            setShowTotal(false);
            setGameState(GameUtils.allTilesDown(nextTileEnabled) ? "game-over" : "roll");

            console.log(`Submitted valid sum [${checkedTiles}]`);
        } else {
            console.log(`Submitted invalid sum [${checkedTiles}]`);
        }
    }    

    // Final component
    return (
      <div className="flex justify-center">
        <FontAwesomeIcon icon={GameConstants.DICE_TO_COMP_MAP[diceRoll[0]]} size="2xl" />
        {diceRoll.length == 2 && <FontAwesomeIcon icon={GameConstants.DICE_TO_COMP_MAP[diceRoll[1]]} size="2xl" />}
        {GameUtils.isOneDiceRollAvail(tileEnabled) &&
            <button name="rollOne" className={buttonClass} onClick={onRollClick} disabled={gameState == "roll" ? false : true}>
                Roll 1 die
            </button>
        }
        <button name="rollTwo" className={buttonClass} onClick={onRollClick} disabled={gameState == "roll" ? false : true}>
            Roll 2 dice
        </button>
        <button className={buttonClass}>
            Help
        </button>
        <button className={buttonClass} onClick={onExitButtonClick}>
            Exit
        </button>
        {showTotal && <p>Total: {GameUtils.sumDiceRoll(diceRoll)}</p>}
        <form action={onSubmit} >
            {checkBoxes}
            <input type="submit" className={buttonClass} disabled={gameState == "play" ? false : true} />
        </form>
        {gameState == "game-over" && <p className="text-red-600">Game Over!</p>}
      </div>
    )
}
  
export default Game