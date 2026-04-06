import { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

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
    // The "Tavern Table" background
    <div className="flex min-h-screen w-full bg-stone-700 p-4 md:p-10 pb-20 items-center justify-center">
      
      {/* The "Shut the Box" Game Board */}
      <div className="relative w-full max-w-6xl min-h-[80vh] flex flex-col rounded-xl border-16 border-amber-900 bg-emerald-800 shadow-[inset_0_0_40px_rgba(0,0,0,0.8),0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-4 ring-amber-950">
        
        <NavBar showBackButton={screen} onBackButtonClick={onBackButtonClick} onHelpButtonClick={onHelpButtonClick} />

        {showHelp && <Instructions onExit={onHelpExit} />}
        
        <main className="flex-1 flex flex-col justify-center pb-8 z-0">
          {screen === "main-menu" && <MainMenu onClickPlayButtons={onClickPlayButtons} />}
          {screen === "game" && <Game count={tiles} />}
        </main>

      </div>
    </div>
  )
}

export default App
