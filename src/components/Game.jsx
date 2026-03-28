import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Title from './Title.jsx'
import TileArray from './TileArray.jsx'
import GameOver from './GameOver.jsx'

import * as GameUtils from '../utils/utils.js'
import * as GameConstants from '../utils/constants.js'


function Game({count}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("init");
    const [ showTotal, setShowTotal ] = useState(false);
    const [ showGameOver, setShowGameOver ] = useState(false);
    const [ tileEnabled, setTileEnabled ] = useState(Array(count).fill(true));

    const buttonClass = "w-32 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700";

    // Event handlers
    function onSubmit(formData) {
        let nextTileEnabled = tileEnabled;
        const buttonName = formData.get("roll");

        if (buttonName == "playAgain") {
            setGameState("init");
            setTileEnabled(Array(count).fill(true))
            return;
        }

        if (gameState != "init") {
            const checkedTiles = formData.getAll("tile");

            if (!GameUtils.isSumValid(checkedTiles, diceRoll)) {
                return;
            }

            nextTileEnabled = tileEnabled.map((enabled, i) => {
                return checkedTiles.includes((i+1).toString()) ? false : enabled;
            });
            setTileEnabled(nextTileEnabled);
            if (GameUtils.allTilesDown(nextTileEnabled)) {
                gameOverEffect();
                return;
            }
        }

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
                if (!GameUtils.isPlayPossible(nextTileEnabled, nextDiceRoll)) {
                    gameOverEffect();
                    return;
                }
            }
        }, GameConstants.ROLL_ANIMATON_DELAY);

        setGameState("play");
    }

    function onGameOverExit() {
        setShowGameOver(false);
    }

    function gameOverEffect() {
        setTimeout(() => {
            setGameState("game-over");
            setShowGameOver(true);
        }, GameConstants.GAME_OVER_DELAY);   
    }

    // Final component
    return (
        <div className="flex flex-col justify-center">
            <div className="text-center m-6">
                <Title textSize="text-6xl" />
            </div>
            <form action={onSubmit} >
                <TileArray count={count} tileEnabled={tileEnabled} />

                <div className="flex flex-row justify-center m-6">
                    <FontAwesomeIcon icon={GameConstants.DICE_TO_COMP_MAP[diceRoll[0]]} size="2xl" style={{color: "#ffffff"}} />
                    {diceRoll.length == 2 && <FontAwesomeIcon icon={GameConstants.DICE_TO_COMP_MAP[diceRoll[1]]} size="2xl" style={{color: "#ffffff"}} />}
                </div>

                {showTotal && <p className="text-center">Total: {GameUtils.sumDiceRoll(diceRoll)}</p>}

                <div className="flex flex-row justify-center m-6">
                    {gameState != "game-over" && GameUtils.isOneDiceRollAvail(tileEnabled) &&
                        <button type="submit" name="roll" value="rollOne" className={GameConstants.BUTTON_STYLE_CLASS}>
                            Roll 1 die
                        </button>
                    }
                    {gameState != "game-over" &&
                        <button type="submit" name="roll" value="rollTwo" className={GameConstants.BUTTON_STYLE_CLASS}>
                            Roll 2 dice
                        </button>
                    } 
                    {gameState == "game-over" &&
                        <button type="submit" name="roll" value="playAgain" className={GameConstants.BUTTON_STYLE_CLASS}>
                            Play Again?
                        </button>
                    }
                </div>
            </form>
            {showGameOver && <GameOver onExit={onGameOverExit} score={GameUtils.getFinalScore(tileEnabled)} />}
        </div>
    )
}
  
export default Game