
// element selector


// let a = document.getElementById("mainImg");
// console.dir(a);
// console.dir(document.getElementById("description"));
// console.log(document.getElementsByClassName("oldImg"));
// for(let i =0;i<smallImages.length;i++){
//     console.dir(smallImages[i].scr);
// }

// query selector
// document.querySelector("h1");
// document.querySelector("#description");
// document.querySelector(".oldImg");
// console.dir(document.querySelector("div a"));


// console.dir(document.querySelectorAll("div a"));

// show content in html

// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.innerText)
// console.log(para.textContent)
// console.log(para.innerHTML)

// console.log(document.querySelector("h1").innerText = 'i am villian');
// document.querySelector('h1').textContent = ' manupulation';


// getter or setter attributes

// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id','newid');
// img.setAttribute('src','assets/creation_3.jpeg');

// manipulating style

// let img = document.querySelector('img');
// console.dir(img)
// img.style.border = '5px solid red';
// document.querySelector('h1').style.backgroundColor = 'blue';
// let links = document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color = 'yellow';
// }
// let box = document.querySelector('.box');
// box.style;


//classList

// let img = document.querySelector('img'); // use to select element
// img.classList.add('abc'); // use to add class in img
// img.classList.remove('abc'); //use to remove class in img
// img.classList.contains('abc'); // use to check class exist or not
// img.classList.toggle('abc'); // use to add class if not exist or remove if exist
// img.classList; // use to pring class in img

// navigation on page 

// let h4 = document.querySelector('h4');
// h4.parentElement

// let ul = document.querySelector('ul');
// ul.childElementCount;
// ul.children;
// ul.nextElementSibling
// ul.previousElementSibling

// let img = document.querySelector('img');
// img.previousElementSibling.computedStyleMap.color = 'green';

// adding element on page

// let p = document.createElement('p');
// p.innerText = 'hi i am new para';
// p.append('more contant');
// console.dir(p); 

// let box = document.querySelector('.box');
// box.append(p);
// box.appendChild(p);

// let btn = document.createElement('button');
// btn.innerText = 'click me!';
// console.dir(btn);

// box.append(btn);

// box.prepend(btn);

// box.insertAdjacentElement('beforebegin',btn);
// box.insertAdjacentElement('boforeend',btn);
// box.insertAdjacentElement('afterbegin',btn);
// box.insertAdjacentElement('afterend',btn);

// remove element
// let p = document.createElement('p');
// p.innerText = 'hi i am new para';
// let box = document.querySelector('.box');
// box.append(p);
// box.appendChild(p);

let container = document.createElement('div');
let p = document.createElement('p');
p.innerText = ' hey i am red!';
p.style.color = 'red';
container.append(p);
let body = document.querySelector('body');
body.append(container);

let h3 = document.createElement('h3');
h3.innerText = ' i am a blue h3!';
h3.style.color = 'blue';
container.append(h3);

let div = document.createElement('div');
div.style.border = '2px solid black';
div.style.background = 'pink';
let h1 = document.createElement('h1');
h1.innerText = ' i am in a div';
div.appendChild(h1);
let p1 = document.createElement('p');
p1.innerText = 'me too!';
div.append(p1);
container.append(div);

let bnt = document.createElement('button');
bnt.innerText = 'seond btn';
container.append(bnt);

