# Rock, Paper, Scissors, Lizard, Spock
[Play the game with the very long title here!](https://besartelezi.github.io/rock-paper-scissors-lizard-spock/)
## A small step for a programmer, but a big step for a programmer that isn't fluent in Javascript (YET!)
The first step to this project, is adding the necessary HTML elements. This means:
* Buttons for all options: *Rock, Paper, Scissors, Lizard, Spock*
* Button that will start the game and let the computer pick his cards

It's never wrong to push yourselves, that's why, when I'm done with this project and I still have some time left, I'd like to implement the following features:
* Difficulty settings:
  * Easy = Lets the player win every time
  * Medium = Randomizes the computer's cards so it's an honest game
  * Hard = The computer will win every time
  * Besart = Play against a highly trained and refined AI that will play this game in the exact same manner as Besart himself would (he always picks rock for God knows what reason)
* Change Text when winning/losing
  * Creating an array of pun-related sentences that will show up when the user wins. If the user wins while using rock:
    * Rock on!
    * You sure Rocked the enemy!
    * You're a stone cold killer!
    * ...

## When in doubt, Write it out:
What I want the Javascript code to do is:
* When the user clicks the "Rock" button, to put in that "Rock" value in the function that will be used to play the game.
* To create a function that generates a random value from Rock, Paper, Scissors, Lizard, Spock
* The biggest IF function that I will have made up to this point, with every IF function being worded like: if (userpick = rock) {}

This is the way I will be tackling this issue for now, this however can change once I discover an easier/more fun way to achieve the result I desire.

## Reflection Time
So far, I have struggled more than expected. The biggest issue I'm currently having, is being able to get the ID number of my buttons and assign that ID number as a value to a let variable. </br>

I do, however, have made some pretty significant progress on some other aspects of this assignment:
* I can use '&&' inside of an if function, so for example, if the user picks rock AND the computer picks scissors, it will result in the user winning.
* I created an array of the possible choices you have in this game, and a function that picks out one random choice from it.

So my current objectives are:
* Figuring out the before mentioned problem I'm having with being able to get the ID of a button and assign it to a let variable.
* Searching the possibility of being able to use an 'OR' function (if such a thing exists) inside the if function, so that I can have only 3 if's with multiple arguments.

## Javascript Extravaganza
I can proudly say that I have finished writing all the javascript of the game and that it's working perfectly. There are still some things I'd like to improve, but I want to clear as many assignments as possible, so I will be focusing on learning and quantity instead of quality for now. </br>

I was finally able to solve the biggest problem I was having with this assignment, getting the ID numbers of the buttons in the let variable called UserChoice. I did it like this:
```
UserPicksRock.addEventListener("click", RockHasBeenChosen)
function RockHasBeenChosen () {
ShowUserChoice.innerHTML = "You have chosen: Rock"
UserChoice = UserPicksRock.id
}
```

I also discovered that you can use OR statements in an if statement, they look like this: || </br>
They saved me a lot of time and energy and made the code look way simpler than it would've looked like if I didn't use them. </br>

With Javascript out of the way, I will focus on  the styling for a little bit to make the game look more appealing.
## CSS: Crispy Smooth Styling
