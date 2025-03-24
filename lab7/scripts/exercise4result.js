const getResults = () => {
    let storedFname = sessionStorage.getItem('firstname');
    let storedLname = sessionStorage.getItem('lastname');

    if (storedFname === null || storedLname === null) {
        return;
    }

    let greeting = document.getElementById('greeting');
    greeting.innerHTML = `Hello ${storedFname} ${storedLname}`;
}

const removeResults = () => {
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');

    let greeting = document.getElementById('greeting');
    greeting.innerHTML = 'Hello';
}

document.addEventListener('DOMContentLoaded', getResults);

let remove = document.getElementById('remove');
remove.addEventListener('click', removeResults);