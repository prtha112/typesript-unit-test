export class Employee{
    private listEmployee: Array<string> = []

    constructor(name: string){
        this.listEmployee.push(name)
    }

    public showEmployee(){
        console.log(this.listEmployee)
        return this.listEmployee
    }
}