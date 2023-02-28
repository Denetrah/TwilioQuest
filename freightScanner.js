function scan(items) {
    let cbcount = 0
    items.forEach(function(item) {
        if(item === 'contraband') {
            cbcount++
        }
    })
    return cbcount
}