function Title({textSize}) {
    return (
        <>
            <h1 className={`font-pub text-amber-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
                        tracking-tighter italic uppercase transition-all duration-700 hover:scale-105 ${textSize}`}>
                Shut The Box
            </h1>
        </>
    )
}
  
export default Title