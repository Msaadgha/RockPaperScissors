function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('result-message').textContent = resultMessage;
}
