import { useState } from 'react'

import Dice from './Dice.jsx';
import Title from './Title.jsx'
import TileArray from './TileArray.jsx'
import GameOver from './GameOver.jsx'

import * as GameUtils from '../utils/utils.js'
import * as GameConstants from '../utils/constants.js'


function Game({count}) {

    // State
    const [ diceRoll, setDiceRoll ] = useState([1, 1]);
    const [ gameState, setGameState ] = useState("init"); // possible states: init, play, rolling, game-over
    const [ showGameOver, setShowGameOver ] = useState(false);
    const [ tileEnabled, setTileEnabled ] = useState(Array(count).fill(true));
    const [ tileSelected, setTileSelected ] = useState(Array(count).fill(false));

    console.log(tileSelected);

    const DICE_COMPONENT_MAP = {
        1: <Dice side={1} />,
        2: <Dice side={2} />,
        3: <Dice side={3} />,
        4: <Dice side={4} />,
        5: <Dice side={5} />,
        6: <Dice side={6} />,
    };

    // Event handlers
    function onSubmit(formData) {
        let nextTileEnabled = tileEnabled;
        const buttonName = formData.get("roll");

        setTileSelected(Array(count).fill(false));

        if (buttonName == "playAgain") {
            setGameState("init");
            setTileEnabled(Array(count).fill(true))
            return;
        }

        if (gameState != "init") {
            const checkedTiles = formData.getAll("tile");

            // if (!GameUtils.isSumValid(checkedTiles, diceRoll)) {
            //     setGameState("invalid-sum");
            //     setTimeout(() => {
            //         setGameState("play");
            //     }, GameConstants.INVALID_SUM_DELAY);
            //     return;
            // }

            nextTileEnabled = tileEnabled.map((enabled, i) => {
                return checkedTiles.includes((i+1).toString()) ? false : enabled;
            });
            setTileEnabled(nextTileEnabled);
            if (GameUtils.allTilesDown(nextTileEnabled)) {
                gameOverEffect();
                return;
            }
        }
        setGameState("rolling");

        let rolls = 0;
        const interval = setInterval(() => {
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;

            const nextDiceRoll = buttonName == "rollTwo" ? [dice1, dice2] : [dice1]
            setDiceRoll(nextDiceRoll);

            rolls++;
            if (rolls >= GameConstants.NUM_ROLLS_PER_ANIMATION) {
                clearInterval(interval);
                setGameState("play");
                if (!GameUtils.isPlayPossible(nextTileEnabled, nextDiceRoll)) {
                    gameOverEffect();
                    return;
                }
            }
        }, GameConstants.ROLL_ANIMATON_DELAY);

    }

    function onGameOverExit() {
        setShowGameOver(false);
    }

    function onTileChange(e) {
        const value = parseInt(e.target.value, 10);
        const checked = e.target.checked;
        setTileSelected(prevTileSelected => prevTileSelected.map((prev_val, i) => i == value-1 ? checked : prev_val));
    }

    function gameOverEffect() {
        setTimeout(() => {
            setGameState("game-over");
            setShowGameOver(true);
        }, GameConstants.GAME_OVER_DELAY);   
    }

    function helperText() {
        switch(gameState) {
            case "init":
                return "Total: ";
            case "play":
                return "Total: " + GameUtils.sumDiceRoll(diceRoll);
            case "rolling":
                return "Rolling...";
            case "game-over":
                return "Game Over";
        }
    }

    // Final component
    return (
        <div className="flex flex-col justify-center">
            <div className="text-center m-6">
                <Title textSize="text-6xl" />
            </div>
            <form action={onSubmit} >
                <TileArray count={count} tileEnabled={tileEnabled} tileSelected={tileSelected} onChange={onTileChange} gameState={gameState}/>

                <div className="flex justify-center">
                    <p className={"px-4 py-2 w-30 text-center rounded-md text-sm font-medium shadow-lg cursor-default bg-white text-black"}
                    >
                        {helperText()}
                    </p>
                </div>

                <div className="flex flex-row justify-center m-4 gap-2">
                    {DICE_COMPONENT_MAP[diceRoll[0]]}
                    {diceRoll.length == 2 && DICE_COMPONENT_MAP[diceRoll[1]]}
                </div>

                <div className="flex flex-row justify-center m-6 gap-4">
                    {gameState != "game-over" &&
                        <button type="submit" name="roll" value="rollTwo" className={GameConstants.BUTTON_STYLE_CLASS} disabled={gameState == "rolling" || (gameState == "play" && !GameUtils.isSumValid(tileSelected, diceRoll))}>
                            Roll 2 dice
                        </button>
                    } 
                    {gameState != "game-over" &&
                        <button type="submit" name="roll" value="rollOne" className={GameConstants.BUTTON_STYLE_CLASS} disabled={gameState != "play" || (!GameUtils.isOneDiceRollAvail(tileEnabled, tileSelected) || !GameUtils.isSumValid(tileSelected, diceRoll))}>
                            Roll 1 die
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