import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

export const NUM_ROLLS_PER_ANIMATION = 6;

export const ROLL_ANIMATON_DELAY = 100;

export const DICE_TO_COMP_MAP = {
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix,
};

export const BUTTON_STYLE_CLASS = "text-white bg-amber-400 box-border border border-transparent hover:bg-amber-600 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 w-50 h-15";