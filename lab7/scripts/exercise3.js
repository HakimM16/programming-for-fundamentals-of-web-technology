const store = () => {
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;

    localStorage.setItem('firstname', fname);
    localStorage.setItem('lastname', lname);
}

let button = document.getElementById('store');
button.addEventListener('click', store);