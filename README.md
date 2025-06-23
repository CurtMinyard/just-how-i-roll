
Just How We Roll
Introduction
Today you'll be making an app that combines all the fun of rolling dice with all the fun of tracking the average rolls so far. These are equal funs.

The solution is hosted here.

Tools Left Behind
There's been some code left behind in this other-wise gutted app: a random number generator and an array sorter. Use them!

And feel free to use the comment boxes to organize your sections. (Or don't.)

Tools We'll Be Practicing With
event listeners
string building/interpolationhow 
array management and iteration
maths
Setting Up
Event Listeners

Here's where you'll query the UI elements the user interacts with and add event listener functions to those elements.

For example, if you wanted to run a function when a paragraph was clicked, you'd write:

const para = document.querySelector('#some-paragraph');
para.addEventListener('click', someClickHandlerThatDoesntExistYet);
The UI elements we'll want to add listeners for are:

The dice images should have click event listeners to run their respective "roll functions". Each of the four dice types should have their own separate click-handling functions! (The twin six-sided dice can share one function, until/unless you get to that stretch goal.)
And the reset button should have a click listener to reset all data and the whole interface.
For now, let's just console.log in our callback functions. Whether you'll make them named functions or put them inline, just print out the name of the function so you know it ran.

Let's go to our page now, clicking our dice and reset buttons, and make sure that each one runs its respective function. How will we know? Open your browser's console open! (Cmd-Shift-C on Chrome on macOS.) And keep it open, even after we're done logging, because the console is where your errors will show up.

Resetting/Setting Starting Images

Let's fill in that reset function we left blank. It will need to:

empty all four global roll arrays
change the dice buttons back to their starting images (in the start sub-directory of our images directory!)
change the text in our mean/media/mode text areas to NA
Once you've got that function declared, try smashing that reset button, assuming you wired it up right. You'll know that it works when all four arrays are empty (you can check in the browser console by typing sixes and twelves and so on to see the arrays), the dice pictures are all showing up, and the NA's are showing up under the Mean, Median, and Mode words for each of the four die sections.

Once clicking the reset button works, you should add a call to this function in the global code, so things are reset immediately when the user loads the app!

Roll Functions
Each of your click handlers for your die roll buttons needs to:

Calculate a random number from 1 to the maximum number for that die (a helper function has been left behind for you on that one). For now, it's a good idea to console.log that result.
Change the image of the dice roll "button" to the results, using the images in the d6 and numbers directories. PLEASE NOTE the file names. They all have filenames that you can use to dynamically set which image it should be based on the result of the die roll. That is, if they roll a 3, you can look for 3.png and make that the source for their dice roll button. If they rolled a 5, you'll need 5.png. Notice a pattern? Use it!
Add the result of the roll into its respective array (left behind for you in the global scope) so that we can track our results for that kind of die. Although we shouldn't do it in production, it's not a bad idea to console.log each result as we go.
Try getting the first die section working, then move on. How will you know it's working? You'll be able to click the die and see it roll! If you passed the right number to your randomizing helper function, you should get the highest possible and lowest possible rolls. You should also click it enough that you make sure you don't get broken images, which would probably mean you're accessing a number you shouldn't.

Once you've got that going, it's time for some maths!

Some Maths
The DOM manipulation is harder than what you've done so far, for sure, but the hardest part of this project is calculating the mean, median and mode. We highly recommend making helper functions for each of these that take in an array as input and spit out one number as output. Also, mode is really hard; consider that one a stretch goal!

Some tips:

Run each of these function each time you've rolled a new result.
Feel free to skip around if you're finding one too hard, but mean is easiest for most people and mode is hardest.
For median, you're going to want to sort the numbers. This is a solved problem and relatively easy in JavaScript, but we've also included a helper function that can return a sorted version of whatever number-filled array you pass it.
For the mode, think about storing how many times you've seen each number in an object and tracking which is the highest number as you go.
Once you've got a math function working, we can add it to our die click handler functions. What we want is to get the answer for our particular array, then put that answer in the appropriate mean or median or mode sections.

Good luck!
Good luck indeed.

Stretch Goals
Get that mode working if you haven't yet. It's tough, but... use an object to store the number of times each roll has been rolled, and then you can check every roll as you loop through, updating the object as you go. Don't forget that you can use bracket notation to set the object's keys. So if your variable is roll, and it holds a 6, then saying obj[roll] be the same as saying obj[6], and you can then set that to a value. If this is proving tough for you, move on to another stretch goal and return to it later!
Add animation. You can set an interval, I'd say 200ms, and do a random roll every time the setInterval'd function happens. Don't store it, but DO update the button. If you run it 10 times, that will work out nicely. The trick then is checking how many times it's run and cancelling the interval when that happens. Try global variables to hold 1) the number of times the interval function has run, and 2) the return value of setting up the interval, which, if you'll remember, is a "ticket" you can pass to clearInterval to cancel it. Then, the further trick is to run all your usual code at that point; doing an actual roll, calculating the mean/median/mode, etc.
