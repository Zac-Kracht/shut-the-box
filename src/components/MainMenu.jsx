import Title from "./Title"
import * as GameConstants from '../utils/constants.js'

function MainMenu({onClickPlayButtons}) {

    return (
        <div className="flex flex-col justify-center">
            <div className="text-center m-20">
                <Title textSize="text-8xl" />
            </div>

            <div className="flex flex-col justify-center mt-10 gap-10 mx-auto items-center">
                <button className={GameConstants.BUTTON_STYLE_CLASS}
                        name="play9" onClick={onClickPlayButtons}>
                    Play 9 tile
                </button>
                <button className={GameConstants.BUTTON_STYLE_CLASS}
                        name="play12" onClick={onClickPlayButtons}>
                    Play 12 tile
                </button>
            </div>
        </div>
    )
}
  
export default MainMenu