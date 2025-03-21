let form = document.getElementById('myform');
let itemList = document.getElementById('items');

function add (e){
    e.preventDefault();

    let newItem = document.getElementById('item-input').value;

    

    let li  = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-warning float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

    console.log(li);

    itemList.appendChild(li);
}

function remove (e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}


form.addEventListener('submit', add);
itemList.addEventListener('click', remove);