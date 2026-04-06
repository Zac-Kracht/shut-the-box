import Title from "./Title"
import * as GameConstants from '../utils/constants.js'

function MainMenu({onClickPlayButtons}) {

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="text-center mb-16">
                <Title textSize="text-6xl md:text-8xl text-center" />
            </div>

            <div className="flex flex-col w-full max-w-xs gap-6">
                <button className={GameConstants.BUTTON_STYLE_CLASS} name="play9" onClick={onClickPlayButtons}>
                    Play 9 Tiles
                </button>
                <button className={GameConstants.BUTTON_STYLE_CLASS} name="play12" onClick={onClickPlayButtons}>
                    Play 12 Tiles
                </button>
            </div>
        </div>
    )
}
  
export default MainMenu