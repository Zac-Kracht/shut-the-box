function TileArray({count, gameState, tileEnabled, tileSelected, onChange}) {  
    let checkBoxes = []
    for (let i = 1; i <= count; i++) {
        checkBoxes.push(
            <label key={i.toString()} className="relative cursor-pointer group">
                <input 
                    type="checkbox" 
                    name="tile" 
                    value={i} 
                    checked={tileSelected[i-1]} 
                    disabled={!tileEnabled[i-1] || gameState === "init"} 
                    onChange={onChange} 
                    className="peer sr-only" 
                    aria-label={`Tile ${i}`}
                />
                
                <div className="
                    flex items-center justify-center
                    w-14 h-24 md:w-20 md:h-32 rounded border-b-[6px] md:border-b-8 transition-all duration-200
                    bg-[#f5deb3] text-amber-950 font-black text-3xl md:text-5xl shadow-lg border-[#d2b48c]
                    peer-focus-visible:ring-4 peer-focus-visible:ring-white peer-focus-visible:outline-none
                    peer-checked:translate-y-2 md:peer-checked:translate-y-4 peer-checked:border-b-0 peer-checked:bg-amber-950/80 peer-checked:text-amber-950/0 peer-checked:shadow-inner
                    peer-disabled:cursor-default peer-disabled:opacity-90 peer-disabled:border-b-0 peer-disabled:bg-amber-950/80 peer-disabled:text-amber-950/0 peer-disabled:shadow-inner
                    hover:not-peer-disabled:brightness-105 hover:not-peer-disabled:-translate-y-1
                ">
                    {i}
                </div>
            </label>
        );
    }

    return (
        <div className="flex flex-wrap gap-2 md:gap-4 px-4 py-8 justify-center max-w-4xl mx-auto">
            {checkBoxes}
        </div>
    )
}
  
export default TileArray