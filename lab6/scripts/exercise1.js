let num  = 0
for (let i = 1; i <= 1000; i++) {
    num += i;
}

alert(num); // 500500

document.body.innerHTML = `<p>The sum of integers from 1 to 1000 is: ${num}</p>`;


