let myNums = [];

for (let i = 0; i < 5; i++) {
    let input = window.prompt("Enter a number"); // prompt function to get five numbers 
    myNums.push(input);
}

console.log(myNums); // storing the 5 numbers in an array 

const highest = Math.max(...myNums); // using Math.max() to obtain the largest number 

alert("The highest number is: " + highest); // alerting the user of the highest number