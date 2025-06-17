/**********
 * DATA *
 **********/

const sixes = document.querySelector("#d6-roll");
const doubleSixes = document.querySelectorAll(".double.d6.roll");
const twelves = document.querySelector("#d12-roll");
const twenties = document.querySelector("#d20-roll");
const resetButton = document.querySelector ("#reset-button");
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
const d6Image = document.querySelector("#d6-roll");
d6Image.src = 'images/start/d6.png';
const random  = 6;
d6Image.src = `images/d6/${random}.png`;

/*******************
 * EVENT LISTENERS *
 *******************/
sixes.addEventListener("click", rollSixSidedDie);
doubleSixes.addEventListener("click", rollDoubleSixSidedDice);
twelves.addEventListener("click", rollTwelveSidedDice );
twenties.addEventListener("click", rollTwentySidedDice);
resetButton.addEventListener("click", resetApp);





/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
