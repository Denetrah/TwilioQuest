class Ducktypium {
    constructor(color) {
        this.color = color.toLowerCase()
        if(this.color != 'red' & this.color != 'blue' & this.color != 'yellow' ){
            throw Error('not accepted color')
        }
        
        this.calibrationSequence = []

    }
    refract(color2) {
        this.color2 = color2.toLowerCase()
        if(this.color2 != 'red' & this.color2 != 'blue' & this.color2 != 'yellow' ) {
            throw Error('not accepted color')
        }
        if(this.color2 == this.color) {
            return this.color2
        }
        else if(this.color2 == 'red' && this.color == 'blue') {
            return ('purple')
        }
        else if(this.color2 == 'blue' && this.color == 'red' ) {
            return ('purple')
        }
        else if(this.color2 == 'red' && this.color == 'yellow') {
            return ('orange')
        }
        else if (this.color2 == 'yellow' && this.color == 'red'){
            return ('orange')
        }
        else if(this.color2 == 'yellow' && this.color == 'blue') {
            return ('green')
        }
        else if(this.color2 == 'blue' && this.color == 'yellow') {
            return ('green')
        }
    }
    calibrate(numberArray) {
        this.array = numberArray
        this.array.sort()
        this.calibrationSequence = this.array.map(item => item * 3 )
    }
}
