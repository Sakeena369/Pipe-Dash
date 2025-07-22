const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game_over');
let score = document.querySelector('.score');
let scoreValue = 0;
let passedPipe = false;
let gameEnded = false;
let gameStarted = false; //  New flag to block gameplay until "Start Game"

//  Sounds
const endgame = new Audio('sound/end_game.mp3'); //  Updated file name
const jumpSound = new Audio('sound/jump.mp3');

//  Get player name
let playerName = localStorage.getItem("playerName");
if (!playerName) {
  playerName = prompt("Enter your player name:") || "Player1";
  localStorage.setItem("playerName", playerName);
}

function updateScoreDisplay() {
  score.value = `${playerName} | Score: ${scoreValue}`;
}

async function postScore(player, score) {
  try {
    const response = await fetch("http://localhost:5000/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ player, score }),
    });
    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    console.log(" Score posted successfully");
  } catch (err) {
    console.error(" Failed to post score:", err);
  }
}

//  Start the game logic
function startGame() {
  gameStarted = true; //  Allow gameplay
  scoreValue = 0;
  updateScoreDisplay();

  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      clouds.style.animation = 'none';
      clouds.style.left = `${cloudsPosition}px`;

      
      playEndgameSound();

      mario.src = "images/game-over.png";
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      gameOver.textContent = "Game Over";
      gameOver.style.display = "block";

      const restartBtn = document.querySelector('.menu-btn');
      if (restartBtn) {
        restartBtn.style.display = "block";
      }

      if (!gameEnded) {
        postScore(playerName, scoreValue);
        gameEnded = true;
      }

      clearInterval(loop);
    }

    if (pipePosition < 0 && !passedPipe) {
      scoreValue += 1;
      updateScoreDisplay();
      passedPipe = true;
    }

    if (pipePosition > 120) {
      passedPipe = false;
    }
  }, 10);
}

//  Safe function to play endgame sound
function playEndgameSound() {
  // Resume audio context (needed in Chrome)
  if (typeof AudioContext !== "undefined" || typeof webkitAudioContext !== "undefined") {
    const AudioCtx = AudioContext || webkitAudioContext;
    const context = new AudioCtx();
    if (context.state === "suspended") {
      context.resume();
    }
  }

  endgame.currentTime = 0;
  endgame.volume = 0.9;
  endgame.play().then(() => {
    console.log("Endgame sound played");
  }).catch(err => {
    console.warn("Endgame sound blocked:", err);
  });
}

//  Jump function (blocked if game not started)
const jump = () => {
  if (!gameEnded && gameStarted) {
    mario.classList.add('jump');
    jumpSound.currentTime = 0;
    jumpSound.play().catch(err => {
      console.warn(" Jump sound was blocked:", err);
    });

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
  }
};

document.addEventListener('keydown', (e) => {
  if (gameStarted) {
    jump();
  } else {
    e.preventDefault();
  }
});


function home() {
  window.location.href = "index.html";
}

function restart() {
  window.location.href = "game.html";
}

//  Show instructions modal at start
window.onload = () => {
  const modal = document.getElementById("instructionsModal");
  const startBtn = document.getElementById("startBtn");

  modal.style.display = "flex"; // Show modal

  startBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal

    //  Preload and unlock endgame sound
    endgame.play().then(() => {
      endgame.pause();
      endgame.currentTime = 0;
      endgame.volume = 0.9;
      console.log(" Endgame sound unlocked for autoplay");
    }).catch(err => {
      console.warn(" Endgame preload blocked:", err);
    });

    startGame(); // Start the actual game
  });
};
