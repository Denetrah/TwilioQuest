function calculateMass(freightItems) {

    return freightItems.reduce((total,current) => total +current.length,0)
}




const cargo = ['cat', 'dog','bird']
const mass = calculateMass(cargo)