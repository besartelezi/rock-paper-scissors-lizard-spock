(function () {

    //Array of the choices the computer can make
    const ComputerChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    //the users choice, this changes according to what button the user presses
    let UserChoice

    //The buttons where the user can choose from
    const UserPicksRock = document.getElementById("Rock")
    const UserPicksPaper = document.getElementById("Paper")
    const UserPicksScissors = document.getElementById("Scissors")
    const UserPicksLizard = document.getElementById("Lizard")
    const UserPicksSpock = document.getElementById("Spock")

    const ShowUserChoice = document.getElementById("Choice")
    const Result = document.getElementById("Result")
    const ShowComputerChoice = document.getElementById("ComputerChoice")


    //The functions that will give the UserChoice variable a value corresponding to the chosen button (ex. if user presses rock button, the let Userchoice = rock)
    UserPicksRock.addEventListener("click", RockHasBeenChosen)
    function RockHasBeenChosen () {
        ShowUserChoice.innerHTML = "You have chosen: Rock"
        UserChoice = UserPicksRock.id
    }

    UserPicksPaper.addEventListener("click", PaperHasBeenChosen)
    function PaperHasBeenChosen () {
        ShowUserChoice.innerHTML = "You have chosen: Paper"
        UserChoice = UserPicksPaper.id
    }

    UserPicksScissors.addEventListener("click", ScissorsHasBeenChosen)
    function ScissorsHasBeenChosen () {
        ShowUserChoice.innerHTML = "You have chosen: Scissors"
        UserChoice = UserPicksScissors.id
    }

    UserPicksLizard.addEventListener("click", LizardHasBeenChosen)
    function LizardHasBeenChosen () {
        ShowUserChoice.innerHTML = "You have chosen: Lizard"
        UserChoice = UserPicksLizard.id
    }

    UserPicksSpock.addEventListener("click", SpockHasBeenChosen)
    function SpockHasBeenChosen () {
        ShowUserChoice.innerHTML = "You have chosen: Spock"
        UserChoice = UserPicksSpock.id
    }

    const StartTheGame = () => {
        //The computer picks a random choice from the array
        let ComputerPicks = ComputerChoices[Math.floor(Math.random()*ComputerChoices.length)]
        ShowComputerChoice.innerHTML = ComputerPicks

        if (UserChoice === ComputerPicks) {
            Result.innerHTML = "It's a draw! Try again nerdo."
        }
        if (UserChoice === "Rock" && ComputerPicks === "Scissors" ||
            UserChoice === "Rock" && ComputerPicks === "Lizard" ||
            UserChoice === "Paper" && ComputerPicks === "Rock" ||
            UserChoice === "Paper" && ComputerPicks === "Spock" ||
            UserChoice === "Scissors" && ComputerPicks === "Paper" ||
            UserChoice === "Scissors" && ComputerPicks === "Lizard" ||
            UserChoice === "Lizard" && ComputerPicks === "Paper" ||
            UserChoice === "Lizard" && ComputerPicks === "Spock" ||
            UserChoice === "Spock" && ComputerPicks === "Rock" ||
            UserChoice === "Spock" && ComputerPicks === "Scissors") {
            Result.innerHTML = "Congratulations, you won"
        }
        else {
            Result.innerHTML = "Damn you lost frfr"
        }
    }

    const StartButton = document.getElementById("StartGame");
    StartButton.addEventListener("click", StartTheGame)


    // if () && function exists, does or work in if?

})();