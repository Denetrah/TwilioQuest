class TargetingSolution {
    constructor(object) { 
        this.xcord = String(object.x)
        this.ycord = String(object.y)
        this.zcord = String(object.z)
    
    }
    target() {
        return('('+this.xcord+', '+this.ycord+', ' +this.zcord+')')
    }
    
}

const sln = new TargetingSolution({
    x: 25,
    y: 28,
    z:-32
})

console.log(sln.target())