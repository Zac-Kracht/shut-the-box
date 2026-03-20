import { useState } from 'react'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

function App() {

  const [screen, setScreen] = useState("main-menu")
  const [tiles, setTiles] = useState(9)

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

  function onExitButtonClick() {
    setScreen("main-menu")
  }

  return (
    <div className="flex min-h-screen w-full bg-wood p-10 pb-20">
      <div className="flex-1 rounded-2xl overflow-hidden border-5 border-[#2d1e14] shadow-2xl/40 p-5 bg-felt-light bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.3)_100%)]">
        <main>
          {screen === "main-menu" && <MainMenu onClickPlayButtons={onClickPlayButtons} />}
          {screen === "game" && <Game count={tiles} onExitButtonClick={onExitButtonClick} />}
        </main>
      </div>
    </div>
  )
}

export default App
