import { useState } from 'react'

import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Instructions from './components/Instructions';
import NavBar from './components/NavBar';

function App() {

  const [ screen, setScreen ] = useState("main-menu");
  const [ showHelp, setShowHelp ] = useState(false);
  const [ tiles, setTiles ] = useState(9);

  function onClickPlayButtons(event) {
    setScreen("game");
    switch (event.currentTarget.name) {
      case "play9":
        setTiles(9);
        break;
      case "play12":
        setTiles(12);
        break;
    }
  }

  function onBackButtonClick() {
    setScreen("main-menu");
  }

  function onHelpButtonClick() {
    setShowHelp(true);
  }

  function onHelpExit() {
    setShowHelp(false);
  }

  return (
    <div className="game-board-behind-container">
      <div className="game-box-container">
        
        <NavBar showBackButton={screen} onBackButtonClick={onBackButtonClick} onHelpButtonClick={onHelpButtonClick} />

        {showHelp && <Instructions onExit={onHelpExit} />}
        
        <main className="main-game-container">
          {screen === "main-menu" && <MainMenu onClickPlayButtons={onClickPlayButtons} />}
          {screen === "game" && <Game count={tiles} />}
        </main>

      </div>
    </div>
  )
}

export default App
