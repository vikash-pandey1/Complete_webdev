// class Person{
//     constructor(name,age){
//         this.name =name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi i am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,marks){
//         super(name,age);// parent class constructor is called
//         this.marks = marks;
//     }
// }

// let stu1 = new Student("vikash",22,99);

// class teacher extends Person{
//     constructor(name,age,sub){
//         super(name,age);// parent class constructor is called
//         this.sub =sub;
//     }
// }
// let tea = new teacher("ram",55,55);

// stu1.talk()
// tea.talk();

class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm=blooded";
    }
    eat(){
        console.log("eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("barking..");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meaw(){
        console.log("meawing..");
    }
}

let dog1 = new Dog("seru");
dog1.bark();
dog1.eat();
console.log(dog1.name);
let cat1 =new Cat("cittu");

