import { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Instructions from './components/Instructions';

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
    <div className="flex min-h-screen w-full bg-wood p-10 pb-20">
      <div className="flex-1 rounded-2xl overflow-hidden border-5 border-[#2d1e14] shadow-2xl/40 p-5 bg-felt-light bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.3)_100%)]">
        <div className="flex flex-row justify-between">
          {screen == "game" &&
            <button
              onClick={onBackButtonClick}
              className="flex items-center justify-center w-10 h-10 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FaLongArrowAltLeft />
            </button>
          }
          <button
            onClick={onHelpButtonClick}
            className="ml-auto flex items-center justify-center w-10 h-10 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <span className="text-xl font-bold">?</span>
          </button>
        </div>
        {showHelp && <Instructions onExit={onHelpExit} />}
        <main>
          {screen === "main-menu" && <MainMenu onClickPlayButtons={onClickPlayButtons} />}
          {screen === "game" && <Game count={tiles} />}
        </main>
      </div>
    </div>
  )
}

export default App
