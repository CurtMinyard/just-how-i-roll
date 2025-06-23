/********************
    * DATA *
********************/
const sixes = document.querySelector("#d6-roll");
const doubleSixes = document.querySelectorAll(".double.d6.roll");
const twelves = document.querySelector("#d12-roll");
const twenties = document.querySelector("#d20-roll");
const resetButton = document.querySelector("#reset-button");

/********************
 * HELPER FUNCTIONS *
 ********************/
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}
/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Rolls = [];
const doubleD6Rolls = [];
const d12Rolls = [];
const d20Rolls = [];
/*******************
 * EVENT LISTENERS *
 *******************/
sixes.addEventListener("click", rollD6);
doubleSixes.forEach(die => die.addEventListener("click", rollDoubleD6));
twelves.addEventListener("click", rollD12);
twenties.addEventListener("click", rollD20);
resetButton.addEventListener("click", resetGame);
/******************
 * RESET FUNCTION *
 ******************/
function resetGame() {
    d6Rolls.length = 0;
    doubleD6Rolls.length = 0;
    d12Rolls.length = 0;
    d20Rolls.length = 0;

    sixes.src = "images/start/d6.png";
    doubleSixes.forEach(die => die.src = "images/start/d6.png");
    twelves.src = "images/start/d12.png";
    twenties.src = "images/start/d20.png";
    ['d6', 'double-d6', 'd12', 'd20'].forEach(prefix => {
        document.querySelector(`#${prefix}-rolls-mean`).textContent = "NA";
        document.querySelector(`#${prefix}-rolls-median`).textContent = "NA";
        document.querySelector(`#${prefix}-rolls-mode`).textContent = "NA";
    });
}
/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
function rollD6() {
    const result = getRandomNumber(6);
    d6Rolls.push(result);
    sixes.src = `images/d6/${result}.png`;
    updateStats(d6Rolls, "d6");
   
}
function rollDoubleD6() {
    const result1 = getRandomNumber(6);
    const result2 = getRandomNumber(6);
    doubleD6Rolls.push(result1 + result2);
    doubleSixes[0].src = `images/d6/${result1}.png`;
    doubleSixes[1].src = `images/d6/${result2}.png`;
    updateStats(doubleD6Rolls, "double-d6");
}
function rollD12() {
    const result = getRandomNumber(12);
    d12Rolls.push(result);
    twelves.src = `images/d12/${result}.png`;
    updateStats(d12Rolls, "d12");
}
function rollD20() {
    const result = getRandomNumber(20);
    d20Rolls.push(result);
    twenties.src = `images/d12/${result}.png`;
    updateStats(d20Rolls, "d20");
}
resetGame();
/****************
 * MATH SECTION *
 ****************/
function calculateMean(numbers) {
    if (numbers.length === 0) return "NA";
     let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
 let average = sum / numbers.length;
    return average.toFixed(2);
}
function calculateMedian(numbers) {
    if (numbers.length === 0) return "NA";
    let sorted = numbers.slice().sort(function(a, b) {
        return a - b;
    });
  let middleIndex = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        let middle1 = sorted[middleIndex - 1];
        let middle2 = sorted[middleIndex];
        let median = (middle1 + middle2) / 2;
        return median.toFixed(2);
    } else {
        return sorted[middleIndex].toFixed(2);
    }
}
function calculateMode(numbers) {
    if (numbers.length === 0) return "NA";
    let count = {}; 
    let maxCount = 0;
    let modeNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];
        if (count[value] === undefined) {
            count[value] = 1;
        } else {
            count[value]++;
        }
        if (count[value] > maxCount) {
            maxCount = count[value];
        }
    }
    for (let number in count) {
        if (count[number] === maxCount) {
            modeNumbers.push(number);
        }
    }
    return modeNumbers.length === 1 ? modeNumbers[0] : modeNumbers.join(", ");
}
function updateStats(numbers, label) {
    document.querySelector(`#${label}-rolls-mean`).textContent = calculateMean(numbers);
    document.querySelector(`#${label}-rolls-median`).textContent = calculateMedian(numbers);
    document.querySelector(`#${label}-rolls-mode`).textContent = calculateMode(numbers);
}


