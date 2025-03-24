const getResults = () => {
    let storedFname = localStorage.getItem('firstname');
    let storedLname = localStorage.getItem('lastname');

    if (storedFname === null || storedLname === null) {
        return;
    }

    let greeting = document.getElementById('greeting');
    greeting.innerHTML = `Hello ${storedFname} ${storedLname}`;
}

const removeResults = () => {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');

    let greeting = document.getElementById('greeting');
    greeting.innerHTML = 'Hello';
}

document.addEventListener('DOMContentLoaded', getResults);

let remove = document.getElementById('remove');
remove.addEventListener('click', removeResults);