function TileArray({count, tileEnabled}) {  
    let showOverlay = true;

    let checkBoxes = []
    for (let i = 1; i <= count; i++) {
        checkBoxes.push(
            <label key={i.toString()} className="relative cursor-pointer">
                <input type="checkbox" name="tile" value={i} disabled={!tileEnabled[i-1]} className="peer sr-only" />
                <div className="
                    flex items-center justify-center
                    w-18 h-30 rounded-md border-2 transition-all
                    border-slate-300 bg-white text-slate-600 font-bold
                    peer-checked:border-amber-500 peer-checked:bg-amber-100 peer-checked:text-amber-700
                    peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:border-gray-200 peer-disabled:text-gray-400
                    hover:not-peer-disabled:border-amber-300
                    ">
                    {i}
                </div>
            </label>
        );
    }

    return (
        <div className="flex flex-wrap gap-0 p-8 justify-center">
            {checkBoxes}
        </div>
    )
}
  
export default TileArray