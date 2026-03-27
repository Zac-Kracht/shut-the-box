function GameOver({onExit, score}) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden">

                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                    <h2 className="text-xl font-semibold text-gray-900">Game Over</h2>              
                    <button
                        onClick={onExit}
                        className="p-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none cursor-pointer"
                        aria-label="Close Help"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6 overflow-y-auto">

                    <p className="mb-4 text-gray-700 font-medium">
                        Score: {score}
                    </p>

                </div>

            </div>
        </div>
    )
}
  
export default GameOver