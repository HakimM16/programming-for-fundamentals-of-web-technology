const store = () => {
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;

    sessionStorage.setItem('firstname', fname);
    sessionStorage.setItem('lastname', lname);
}

let button = document.getElementById('store');
button.addEventListener('click', store);