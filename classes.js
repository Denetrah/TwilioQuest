class Materializer {
    constructor(target) {
        this.target = target
        this.activated = false
        // property and equal to
    }

    activate(){this.activated = true}
    // instance function 
   
    materialize(){
        if(this.activated === true){return this.target}
    }
    // instance function with return undifiend 
}