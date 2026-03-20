function MainMenu({onClickPlayButtons}) {

    const buttonClass = "text-white bg-amber-400 box-border border border-transparent hover:bg-amber-600 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 w-50 h-15"

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="text-center m-20">
                    <h1 className="font-pub text-8xl text-amber-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
                                tracking-tighter italic uppercase transition-all duration-700 hover:scale-105">
                        Shut The Box
                    </h1>
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