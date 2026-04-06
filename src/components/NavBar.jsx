import { FaLongArrowAltLeft } from "react-icons/fa";

function NavBar({showBackButton, onBackButtonClick, onHelpButtonClick}) {

    return (
        <div className="flex flex-row justify-between p-4 relative z-10">
            {showBackButton === "game" ? (
                <button
                    onClick={onBackButtonClick}
                    aria-label="Back to Main Menu"
                    className="flex items-center justify-center w-12 h-12 bg-amber-900/50 border-2 border-amber-700 rounded-full text-amber-200 hover:bg-amber-800 hover:text-white transition-colors cursor-pointer focus-visible:ring-4 focus-visible:ring-amber-400 focus:outline-none"
                >
                    <FaLongArrowAltLeft size={20} />
                </button>
                ) : (
                <div className="w-12 h-12" /> 
            )}

            <button
                onClick={onHelpButtonClick}
                aria-label="How to play"
                className="flex items-center justify-center w-12 h-12 bg-amber-900/50 border-2 border-amber-700 rounded-full text-amber-200 hover:bg-amber-800 hover:text-white transition-colors cursor-pointer focus-visible:ring-4 focus-visible:ring-amber-400 focus:outline-none"
            >
                <span className="text-2xl font-bold">?</span>
            </button>
        </div>
    )
}

export default NavBar
