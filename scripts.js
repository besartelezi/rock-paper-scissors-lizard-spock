(function () {

    const GameChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    const RockButton = document.getElementById("Rock");
    RockButton.onclick = () => {
        console.log(GameChoices[0])
    }

    const PaperButton = document.getElementById("Paper");
    PaperButton.onclick = () => {
        console.log(GameChoices[1])
    }

    const ScissorsButton = document.getElementById("Scissors");
    ScissorsButton.onclick = () => {
        console.log(GameChoices[2])
    }

    const LizardButton = document.getElementById("Lizard");
    LizardButton.onclick = () => {
        console.log(GameChoices[3])
    }
    const SpockButton = document.getElementById("Spock");
    SpockButton.onclick = () => {
        console.log(GameChoices[4])
    }

    const StartTheGame = () => {
        //The computer picks a random choice from the array
        let ComputerPicks = GameChoices[Math.floor(Math.random()*GameChoices.length)]
        if (ComputerPicks === GameChoices[0]) {
        }
    }

    const StartButton = document.getElementById("StartGame");
    StartButton.addEventListener("click", StartTheGame)

})();