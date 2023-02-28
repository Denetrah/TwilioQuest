function addFirstToLast(stringArray) {
    let combo = '';
    l = stringArray.length - 1
    if(stringArray.length > 0) {
        combo = stringArray[0] + stringArray[l]
    }
    return combo
}