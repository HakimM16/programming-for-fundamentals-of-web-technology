const getResults = () => {
    let storedFname = sessionStorage.getItem('firstname');
    let storedLname = sessionStorage.getItem('lastname');

    if (storedFname === null || storedLname === null) {
        return;
    }

    let greeting = document.getElementById('greeting');
    let info = document.createElement('h4');
    info.textContent = `Hello ${storedFname} ${storedLname}`;
    greeting.appendChild(info);
    
}

const removeResults = () => {
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    document.querySelector('h4').remove();

    let greeting = document.getElementById('greeting');
    let info = document.createElement('h4');
    info.textContent = 'Hello';
    greeting.appendChild(info);
}

document.addEventListener('DOMContentLoaded', getResults);

let remove = document.getElementById('remove');
remove.addEventListener('click', removeResults);