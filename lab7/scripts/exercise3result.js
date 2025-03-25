const getResults = () => {
    let storedFname = localStorage.getItem('firstname');
    let storedLname = localStorage.getItem('lastname');

    if (storedFname === null || storedLname === null) {
        return;
    }

    let greeting = document.getElementById('greeting');
    let info = document.createElement('h4');
    info.textContent = `Hello ${storedFname} ${storedLname}`;
    greeting.appendChild(info);
    
}

const removeResults = () => {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    document.querySelector('h4').remove();

    let greeting = document.getElementById('greeting');
    let info = document.createElement('h4');
    info.textContent = 'Hello';
    greeting.appendChild(info);
}

document.addEventListener('DOMContentLoaded', getResults);

let remove = document.getElementById('remove');
remove.addEventListener('click', removeResults);