function GameOver({onExit, score}) {

    const handleShare = async () => {
        const shareText = `I just scored ${score} in Shut the Box!`;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shut the Box',
                    text: shareText,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support the native Share API
            navigator.clipboard.writeText(shareText);
            alert(`Score copied to clipboard: ${score}`);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            
            {/* Modal Container: Vertical wooden box aesthetic */}
            <div className="relative w-80 min-h-[420px] flex flex-col bg-amber-900 border-[10px] border-amber-950 rounded-lg shadow-2xl overflow-hidden">

                {/* Exit 'X' Button */}
                <button
                    onClick={onExit}
                    className="absolute top-2 right-2 p-1 text-amber-400/60 hover:text-amber-100 transition-colors focus:outline-none cursor-pointer z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex-1 flex flex-col p-6 relative">
                    
                    {/* Header */}
                    <div className="text-center mt-2 mb-6">
                        <h2 className="text-3xl font-bold text-amber-100 tracking-widest uppercase drop-shadow-md">
                            Game Over
                        </h2>              
                    </div>

                    {/* Score Area: Green Felt Aesthetic */}
                    <div className="flex-1 flex flex-col items-center justify-center bg-emerald-800 rounded shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] border-2 border-emerald-950 p-6 mb-8">
                        <span className="text-emerald-200/80 text-xs font-bold uppercase tracking-widest mb-2">
                            Final Score
                        </span>
                        <span className="text-6xl font-black text-white drop-shadow-lg">
                            {score}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col gap-3">
                        <button
                            onClick={handleShare}
                            className="w-full py-3 px-4 bg-[#f1d5a7] hover:bg-white text-amber-950 font-bold uppercase tracking-wide rounded border-b-4 border-[#cfa56a] active:border-b-0 active:translate-y-1 transition-all"
                        >
                            Share Results
                        </button>
                        <button
                            onClick={onExit}
                            className="w-full py-3 px-4 bg-transparent hover:bg-amber-950/40 text-amber-100 font-bold uppercase tracking-wide rounded border-2 border-amber-800 transition-colors"
                        >
                            Play Again
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
  
export default GameOver