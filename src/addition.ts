export class Addition{  
    private x: number
    private y: number

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }

    public sum(){  
        console.log("SUM: " +(this.x + this.y));  
        return this.x + this.y
    }

    public multi(){
        return this.x * this.y
    }
}  