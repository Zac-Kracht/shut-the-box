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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/wood-pattern2.png')]">
      <main className="bg-green-700 fixed top-10 left-10 right-10 bottom-40 rounded-xl p-5">
        {screen === "main-menu" && <MainMenu onClickPlayButtons={onClickPlayButtons} />}
        {screen === "game" && <Game count={tiles} onExitButtonClick={onExitButtonClick} />}
      </main>
    </div>
  )
}

export default App
