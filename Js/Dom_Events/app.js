let btns = document.querySelectorAll('button');

// mouse event 
// for (btn of btns) {
//     btn.onclick = say;
//     btn.onmouseenter = function () {
//         console.log('mouse over');
//     };
//     console.dir(btn)
// }

//event listener

// for(btn of btns){
//     // btn.addEventListener("click",say);
//     btn.addEventListener("dblclick", function(){
//         console.log('you double clicked');
//     });
// }

// function say() {
//     alert("alert called");

// }
// function sayhello(){
//     alert('second alert');
// }
// btn.onclick = say;

// let div = document.querySelector('div');
// div.addEventListener('click',function (){
//     console.log("div click");
//     div.onclick = alert('hey div');
// })

// use of this in event lintener
// let h1 = document.querySelector('h1');
// let h2 = document.querySelector('h2');
// let p = document.querySelector('p');
// let btn = document.querySelector('button');

// function changeColor(){
//     console.dir(this.innerHTML);
//     this.style.backgroundColor = 'yellow';
//     this.style.color = 'black';
// }
// btn.addEventListener("click",changeColor);
// h1.addEventListener('click',changeColor);
// h2.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);

// keyword events

// let inp = document.querySelector('input');
// inp.addEventListener('keydown',function(){
//     console.log(event.key);
//     // console.log(event.code)
//     if(event.code == "ArrowDown"){
//         console.log("move down")
//     }else if(event.code == 'ArrowUp'){
//         console.log("move up");
//     }else if(event.code == 'ArrowLeft'){
//         console.log('move left');
//     }else if(event.code == 'ArrowRight'){
//         console.log("move right");
//     }
// })
// let inp = document.querySelector('input',);
// inp.addEventListener('keyup',function (){
//     console.log("keyup");
// })

// form event

// let frm = document.querySelector('form');
// frm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.dir(frm);
//     let usr = this.elements[0];
//     let pas = this.elements[1];
//     console.log(usr.value);
//     console.log(pas.value);
// let inp = document.querySelector('#user');
// let pas = document.querySelector('#pass');
// console.log(pas.value);
// console.log(inp.value);
// alert(`hi ${inp.value} you password is set to ${pas.value}`);
// })

// change event

// let user = document.querySelector('#user')
// user.addEventListener('change', function (event) {
//     event.preventDefault();

//     console.log('change event');
//     console.log("final value", this.value);
// })

// user.addEventListener('input', function (event) {
//     event.preventDefault();

//     console.log('input event');
//     console.log("final value", this.value);
// })

let inp = document.querySelector('input');
let para = document.querySelector('p');
inp.addEventListener('input',function(){
    console.log(inp.value);
    para.innerText = inp.value;
})