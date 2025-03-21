// 1 ACCESSING NODES

// 1.1 GET ELEMENTS BY ID

// let title  = document.getElementById('page-title');
// console.log(title);

// document.getElementById('page-title').style.background = 'red';

// title.style.background = 'orange';
// title.style.color = 'black';
// title.style.padding = '0.2rem';


// 1.2 GET ELEMENTS BY CLASS NAME

// let items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);

// 1.3 QUERY SELECTOR

// 1.3.1 EXAMPLE 1

// let header = document.querySelector('header');
// console.log(header);

// header.style.borderBottom = 'solid 0.5rem orange';

// 1.3.2 EXAMPLE 2

// let input = document.querySelector('input');
// console.log(input);
// input.value= 'Orange';

// // 1.3.3 EXAMPLE 3

// let submit = document.querySelector('input[type="submit"]');
// console.log(submit);
// submit.value = 'Add';

// 1.4 QUERY SELECTOR ALL

// let div = document.querySelectorAll('div');
// console.log(div);

// 2 TRAVERSE THE DOM

// let itemList = document.querySelector('#items');

// 2.1 parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'yellow';
// itemList.parentNode.parentNode.style.backgroundColor = 'yellow';

// 2.2 childNodes and children

// console.log(itemList.childNodes);
// console.log(itemList.children[1]);

//console.log(itemList.firstElementChild);

// 3 MODIFY/ADD A DOM ELEMENT

// let newDiv = document.createElement('div');

// newDiv.className = 'Hello text-center';
// newDiv.id = "Hello1";
// newDiv.setAttribute('title','Hello Div');

// let newDivText = document.createTextNode('Welcome Usman');

// newDiv.appendChild(newDivText);

// console.log(newDiv);

// let container = document.querySelector('header');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// 4 EVENT CLICK 

// let button = document.getElementById('button1');

// // function output(){
// //     console.log('clicked');
// //     document.getElementById('page-title').textContent = "Hello";
// // }

// function output(e){
//     console.log('Event type:' +e.shiftKey);
// }

// button.addEventListener('dbclick', output);

// 5 FORM EVENTS 

// let itemInput = document.querySelector('input[type="text"]');

// let form = document.querySelector('form');

// function executeEvent(e){
//     console.log('Event type:' +e.type);
//     e.preventDefault();
// }

// itemInput.addEventListener('focus', executeEvent);
// itemInput.addEventListener('blur', executeEvent);

// form.addEventListener('submit',executeEvent);