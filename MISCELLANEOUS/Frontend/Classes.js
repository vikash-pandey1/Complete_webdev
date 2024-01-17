class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    takl(){
        console.log(`hi my name is ${this.name}`);
    }
}

let p1 = new Person("vikash",22);
let p2 = new Person("ram",23);