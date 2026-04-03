
function Instructions({onExit}) {

    const textStyle = "text-gray-600 leading-relaxed"
    const textStyleBold = "mb-4 text-gray-700 font-medium"

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-2xl max-h-[60vh] flex flex-col bg-amber-100 rounded-xl shadow-2xl overflow-hidden">

                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-amber-200/50 sticky top-0 z-10">
                    <h2 className="text-xl font-semibold text-gray-900">How to play</h2>              
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

                    <p className={textStyleBold}>
                        <strong>Welcome to Shut The Box</strong>
                    </p>
                    
                    <div className="space-y-4">
                        <p className={textStyle}>The goal: <strong>close as many numbered tiles as possible.</strong> The lower your remaining total, the better the score. See if you can <em>Shut the Box</em> by closing every tile!</p>
                        <p className={textStyleBold}>1. Choose Your Chalenge</p>
                        <p className={textStyle}>Before starting, select your difficulty:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li className={textStyle}><strong>9 tiles:</strong> The classic pub experience.</li>
                            <li className={textStyle}><strong>12 tiles:</strong> A greater challenge.</li>
                        </ul>
                        <p className={textStyleBold}>2. Roll the Dice</p>
                        <p className={textStyle}>Click the <strong>Roll 2 dice</strong> button to roll the dice. The sum of the dice determines which tiles can be selected.</p>
                        <p className={`${textStyle} ml-4`}> <em>Note: </em>If all of the tiles greater than 6 have already been played, you will have the option of rolling 1 dice instead.</p>
                        <p className={textStyleBold}>3. Select the Tiles</p>
                        <p className={textStyle}>Select the tiles to play based on your roll. You can only choose tiles that have not already been played.</p>
                        <p className={`${textStyle} ml-4 mb-1`}> <strong>Example: </strong>If you roll a 6 total, you can choose from the following combinations:</p>
                        <ul className="list-disc list-inside ml-8">
                            <li className={textStyle}>6</li>
                            <li className={textStyle}>5, 1</li>
                            <li className={textStyle}>4, 2</li>
                            <li className={textStyle}>3, 2, 1</li>
                        </ul>
                        <p className={textStyleBold}>4. Continue Rolling</p>
                        <p className={textStyle}>Continue rolling and closing tiles as long as the total of the dice can be matched by the remaining open tiles.</p>
                        <p className={textStyleBold}>5. Game Over & Scoring</p>
                        <p className={textStyle}>The game is over when you play all tiles or you roll a combination that cannot be played by the remaining tiles.</p>
                        <p className={`${textStyle} ml-4`}><strong>Your score: </strong>The sum of all remaining tiles.</p>


                    </div>

                </div>

            </div>
        </div>
    )
}
  
export default Instructions