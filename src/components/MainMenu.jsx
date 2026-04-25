import Title from "./Title"

function MainMenu({onClickPlayButtons}) {

    return (
        <div className="menu-container-main">
            <div className="title-container title-container-menu">
                <Title textSize="title-size-menu" />
            </div>

            <div className="menu-container-btns">
                <button className="game-btn focus-visible:ring-4 focus-visible:ring-amber-400" name="play9" onClick={onClickPlayButtons}>
                    Play 9 Tiles
                </button>
                <button className="game-btn focus-visible:ring-4 focus-visible:ring-amber-400" name="play12" onClick={onClickPlayButtons}>
                    Play 12 Tiles
                </button>
            </div>
        </div>
    )
}
  
export default MainMenu