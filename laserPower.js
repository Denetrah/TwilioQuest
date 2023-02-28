function calculatePower(powerSettings){
    let multiplyTwo = powerSettings.map(item => item * 2)
    return totalPower = multiplyTwo.reduce((sum,item) => sum +item ,0 )
}

const laserPower = calculatePower([1,3,10])
console.log("Required laser power is " + laserPower)