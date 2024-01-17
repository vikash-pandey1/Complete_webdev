// let div = document.querySelector('div');
// let ul = document.querySelector('ul')
// let lis = document.querySelector('li');

// div.addEventListener('click',function(){
//     console.log('div was clicked');
// })

// ul.addEventListener('click',function(event){
//     event.stopPropagation();
//     console.log('ul was clicked');
// })

// for(li of lis ){
//     li.addEventListener('click',function(event){
//         event.stopPropagation();
//         console.log('li was clickeddddd');
//     })
// }

let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {
    console.log('clicked!1');
    let item = document.createElement('li');
    item.innerText = input.value;

    let dltbtn = document.createElement('button');
    dltbtn.innerText = 'delete';
    dltbtn.classList.add('delete');
    item.appendChild(dltbtn);
    ul.appendChild(item);
    input.value = '';
})

ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('delete');
    }
})

// let btns = document.querySelector('.delete');
// for(delbtn of btns){
//     delbtn.addEventListener('click',function(){
//         console.log('element delted');
//         let par = this.parentElement;
//         par.remove();
//     })
// }

