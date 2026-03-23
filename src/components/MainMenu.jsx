import Title from "./Title"

function MainMenu({onClickPlayButtons}) {

    const buttonClass = "text-white bg-amber-400 box-border border border-transparent hover:bg-amber-600 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 w-50 h-15"

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="text-center m-20">
                    <Title textSize="text-8xl" />
                </div>

                <div className="flex flex-col justify-center mt-10 gap-10 mx-auto items-center">
                    <button className={buttonClass}
                            name="play9" onClick={onClickPlayButtons}>
                        Play 9 tile
                    </button>
                    <button className={buttonClass}
                            name="play12" onClick={onClickPlayButtons}>
                        Play 12 tile
                    </button>
                </div>
            </div>
        </>
    )
}
  
export default MainMenu