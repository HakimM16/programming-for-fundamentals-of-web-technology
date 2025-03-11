function averageAndMedian(numbers) {
    let sum = 0;
    let median = 0;

    numbers.sort((a, b) => a - b); // sorts array in ascending order

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;

    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        median = numbers[Math.floor(numbers.length / 2)];
    }

    return [average, median];
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageAndMedian(numbers);
console.log(result); // [5.5, 5.5]