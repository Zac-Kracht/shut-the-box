
function Instructions({onExit}) {

    // Reusable styles for the green felt area
    const headingStyle = "text-emerald-200 text-sm font-bold uppercase tracking-widest mt-6 mb-2 border-b border-emerald-700/50 pb-1";
    const textStyle = "text-white/90 text-sm leading-relaxed";
    const listStyle = "list-disc list-outside ml-5 text-white/90 text-sm space-y-1 mb-3";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            
            {/* Modal Container: Vertical wooden box aesthetic */}
            <div className="relative w-full max-w-lg max-h-[85vh] flex flex-col bg-amber-900 border-[10px] border-amber-950 rounded-lg shadow-2xl overflow-hidden">

                {/* Exit 'X' Button */}
                <button
                    onClick={onExit}
                    className="absolute top-2 right-2 p-1 text-amber-400/60 hover:text-amber-100 transition-colors focus:outline-none cursor-pointer z-10"
                    aria-label="Close Help"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mt-6 mb-4 shrink-0">
                    <h2 className="text-2xl font-bold text-amber-100 tracking-widest uppercase drop-shadow-md">
                        How to Play
                    </h2>              
                </div>

                {/* Instructions Area: Green Felt Aesthetic (Scrollable) */}
                <div className="flex-1 overflow-y-auto bg-emerald-800 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] border-t-2 border-emerald-950 p-6 px-8">

                    <p className="text-white font-bold text-lg mb-2 text-center drop-shadow">
                        Welcome to Shut The Box
                    </p>
                    
                    <p className={textStyle}>
                        Your goal is simple: <strong>close as many numbered tiles as possible.</strong> Your score is the sum of the remaining open tiles. The lower, the better. Close them all to <em>Shut the Box</em> and score 0!
                    </p>

                    <h3 className={headingStyle}>1. Setup</h3>
                    <p className={textStyle}>
                        Choose your difficulty before rolling:
                    </p>
                    <ul className={listStyle}>
                        <li><strong>9 Tiles:</strong> The classic pub experience.</li>
                        <li><strong>12 Tiles:</strong> A longer, tougher challenge.</li>
                    </ul>

                    <h3 className={headingStyle}>2. Roll the Dice</h3>
                    <p className={textStyle}>
                        Click the button to roll the dice. The sum of your roll determines your target number. 
                    </p>
                    <p className={`${textStyle} mt-2 italic text-emerald-100/80`}>
                        Note: Once all tiles greater than 6 are closed, you unlock the option to roll just 1 die.
                    </p>

                    <h3 className={headingStyle}>3. Select Tiles</h3>
                    <p className={textStyle + " mb-2"}>
                        Click the open tiles that add up exactly to your dice total. 
                    </p>
                    <div className="bg-emerald-900/50 rounded p-3 text-sm text-emerald-100/90 border border-emerald-950/30">
                        <strong>Example:</strong> If you roll a 6, you can click:
                        <ul className="list-disc list-inside mt-1 ml-2">
                            <li>[ 6 ]</li>
                            <li>[ 5 ] and [ 1 ]</li>
                            <li>[ 4 ] and [ 2 ]</li>
                            <li>[ 3 ], [ 2 ], and [ 1 ]</li>
                        </ul>
                    </div>

                    <h3 className={headingStyle}>4. Game Over</h3>
                    <p className={textStyle}>
                        Keep rolling and matching until you either Shut the Box, or roll a number that cannot be made with the remaining open tiles. When no valid moves are left, the game ends automatically!
                    </p>

                </div>

            </div>
        </div>
    )
}
  
export default Instructions