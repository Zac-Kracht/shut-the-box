function MainMenu({onClickPlayButtons}) {

    const buttonClass = "w-32 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700";

    return (
      <div className="flex justify-center">
        <h1>Shut The Box</h1>
        <div className="grid grid-cols-1">
            <button className={buttonClass} name="play9" onClick={onClickPlayButtons}>
                Play 9 tile
            </button>
            <button className={buttonClass} name="play12" onClick={onClickPlayButtons}>
                Play 12 tile
            </button>
            <button className={buttonClass}>
                Instructions
            </button>
        </div>
      </div>
    )
}
  
export default MainMenu