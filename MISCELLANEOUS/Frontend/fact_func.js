// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${name}`);
//         }
//     };
//     return person
// }

// let p1 = PersonMaker("ram",44);
// let p2 = PersonMaker("vikash",22);
// p1.talk()
// p2.talk()


// Constructor - doesn't return anything & start with capital
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function(){
    console.log(`hi my name is ${this.name}`);
};

let p1 = new Person("vikssh",22);
let p2 = new Person("ram",23);
p1.talk();


