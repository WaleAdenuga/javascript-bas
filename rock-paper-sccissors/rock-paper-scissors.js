

// default operator 
// if left side value is undefined, use default value on the right side
let score = JSON.parse(localStorage.getItem('score')) || 
    {
        wins: 0,
        losses: 0,
        ties: 0
    };

// change the inner html of the score element with class js-score (note the .)
updateScore();

console.log(localStorage.getItem('score'));
/*let score = {
    wins: 0, 
    losses: 0,
    ties: 0 
};*/

function pickComputerMove() {
    let random = Math.random();
    console.log(random);
    let compValue; 
    if (random < 0.34) {
        compValue = 'rock';
    } else if (random >= 0.34 && random < 0.67) {
        compValue = 'paper';
    } else {
        compValue = 'scissors';
    }
    console.log(compValue);
    return compValue;
}

// use event listener insteqd of onClick attribute
let rockElement = document.querySelector('.js-rock-button');
rockElement.addEventListener('click', () => {
    rockFunction('rock');
});

let paperElement = document.querySelector('.js-paper-button');
paperElement.addEventListener('click', () => {
    rockFunction('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    rockFunction('scissors');
});

document.querySelector('.js-reset').addEventListener('click', () => {
    renderMessage();
});

document.querySelector('.js-autoplay').addEventListener('click', () => {
    autoPlay();
});



document.body.addEventListener('keydown' , (event) => {
    console.log(event);
    if (event.key === 'r') {
        rockFunction('rock');
    } else if (event.key === 'p') {
        rockFunction('paper');
    } else if (event.key === 's') {
        rockFunction('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        renderMessage();    
    }
});

function renderMessage() { 
    let messageHTML = `
    <div>Are you sure you want to reset the score?
        <button class="js-yes js-confirm-message">Yes</button>
        <button class="js-no js-confirm-message">No</button>
    </div>
    `;
    document.querySelector('.message-confirm').innerHTML = messageHTML;

    // click yes should reset the score
    document.querySelector('.js-yes').addEventListener('click', () => {
        resetScore();
    });

    // both buttons on click should remove the message
    document.querySelectorAll('.js-confirm-message').forEach
    ((button, index) => {
        button.addEventListener('click', () => {
            document.querySelector('.message-confirm').innerHTML = '';
        });
    });
}

function rockFunction(params) {
    
    let compValue = pickComputerMove();

    let result;
    if (compValue === params) {
        result = 'Tie'; 
    } else if (params ==='scissors' && compValue === 'rock' ) {
        result = 'You lose';
    } else if ( params === 'scissors' && compValue === 'paper') {
        result = 'You win';
    } else if ( params === 'paper' && compValue === 'rock') {
        result = 'You win';
    } else if (params === 'paper' && compValue === 'scissors' ) {
        result = 'You lose';
    } else if (params === 'rock' && compValue === 'paper' ) {
        result = 'You lose';
    } else if (params === 'rock' && compValue === 'scissors') {
        result = 'You win';
    }
    else {
        console.log(compValue, params);
    }

    // switch cases use strict comparison (===)
    switch (result) {
        case 'You win':
            score.wins += 1;
            break;
        case 'You lose':
            score.losses += 1;
            break;
        case 'Tie':
            score.ties += 1;
            break;
    
        default:
            break;
    }

    // save score to local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();    

    document.querySelector('.js-result').innerHTML = result;
    // note below you have actual html inside inner html
    document.querySelector('.js-moves').innerHTML = `You
    <img src="${params}-emoji.png" class="move-icon">
    <img src="${compValue}-emoji.png" class="move-icon">
    Computer`;

    // remove space before wins to remove space on webpage
    //alert(`You picked ${params}, computer picked ${compValue}, ${result}
//Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

function resetScore() {
    console.log('yes was clicked');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

// computer playing against itself
// set interval returns a number, like an id
let isAuto = false;
let intervalId;

/* function autoPlay() {
    if(!isAuto) {
        intervalId = setInterval(function(params) {
            rockFunction(pickComputerMove());
        }, 1000);
        isAuto = true;
    } else {
        clearInterval(intervalId);
        isAuto = false;
    }
    
} */


function autoPlay() {
    let playElement = document.querySelector('.js-autoplay');
    if(!isAuto) {
        intervalId = setInterval(() => {
            rockFunction(pickComputerMove());
        }, 1000);
        isAuto = true;
        playElement.innerHTML = 'Stop Game';
    } else {
        clearInterval(intervalId);
        isAuto = false;
        playElement.innerHTML = 'Auto Play';
    }
    
}
