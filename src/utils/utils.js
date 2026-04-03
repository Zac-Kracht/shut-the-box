export const isSumValid = (tileSelected, diceRoll) => {
    const sumCheckedTiles = tileSelected.reduce(
        (sum, val, i) => sum + (val ? i+1 : 0)
    , 0);
    const sumDiceRoll = diceRoll.reduce((sum, val) => sum + val, 0);
    return sumCheckedTiles === sumDiceRoll ? true : false;
};

export const isPlayPossible = (tileArr, diceArr) => {
    const diceSum = sumDiceRoll(diceArr);
    const availableTiles = tileArr
    .map((tile, i) => tile ? i+1 : -1)
    .filter(i => i !== -1);

    let sumMask = availableTiles.reduce((sum, val) => sum |= (sum << val), 1);

    return (sumMask & (1 << diceSum)) !== 0;
};

export const allTilesDown = (tileArr) => {
    return tileArr.reduce((sum, val) => sum && !val, true);
};

export const isGameOver = (tileArr, diceArr) => {
    return !(!allTilesDown(tileArr) && isPlayPossible(tileArr, diceArr));
};

export const isOneDiceRollAvail = (tileEnabledArr, tileSelectedArr) => {
    return tileEnabledArr.reduce((sum, val, i) => i >= 6 ? (sum && (!val || tileSelectedArr[i])) : sum, true);
};

export const sumDiceRoll = (diceArr) => {
    return diceArr.reduce((sum, val) => sum + val, 0);
};

export const getFinalScore = (tiles) => {
    return tiles.reduce((sum, val, i) => sum + (val ? i + 1 : 0), 0);
};