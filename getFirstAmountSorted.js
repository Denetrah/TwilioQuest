function getFirstAmountSorted(stringArray, number) {
    stringArray.sort()
    stringArray.slice([0], [number])
    return stringArray
}