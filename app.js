//Žaidimas

let zaidejoTaskai = 0;
let kompoTaskai = 0;
let laimetojas = '';

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    laimetojas = 'lygu';
  };

  if (
    (playerSelection === 'akmuo' && computerSelection === 'lapas') ||
    (playerSelection === 'zirkles' && computerSelection === 'akmuo') ||
    (playerSelection === 'lapas' && computerSelection === 'zirkles')
    ) {
    kompoTaskai++
    laimetojas = 'kompas';
  };

  if (
    (playerSelection === 'akmuo' && computerSelection === 'zirkles') ||
    (playerSelection === 'zirkles' && computerSelection === 'lapas') ||
    (playerSelection=== 'lapas' && computerSelection === 'akmuo')
    ){
    zaidejoTaskai++
    laimetojas = 'zaidejas'
  };
  updateScoreMessage(laimetojas, playerSelection, computerSelection)
};

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'akmuo'
    case 1:
      return 'lapas'
    case 2:
      return 'zirkles'
  }
}

function isGameOver () {
  return zaidejoTaskai === 5 || kompoTaskai === 5
};

// UI

const rezultatas = document.getElementById('rezultatasID');
const taskuPran = document.getElementById('taskuPranID');
const taskuLenta = document.getElementById('taskuLentaID');
const zaidejoZenklas = document.getElementById('zaidejoZenklasID');
const zaidejoTaskaiPa = document.getElementById('zaidejoTaskaiID');
const kompoZenklas = document.getElementById('kompoZenklasID');
const kompoTaskaiPa = document.getElementById('kompoTaskaiID');
const akmuoBtn = document.getElementById('akmuoBtnID');
const lapasBtn = document.getElementById('lapasBtnID');
const zirklesBtn = document.getElementById('zirklesBtnID');
const endgameModal = document.getElementById('endgameModal');
const pabaigosMsg = document.getElementById('endgameMsg');
const restartBtn = document.getElementById('restartBtn');
const overlay = document.getElementById('overlay');

akmuoBtn.addEventListener('click', ()=> handleClick('akmuo'));
lapasBtn.addEventListener('click', ()=> handleClick('lapas'));
zirklesBtn.addEventListener('click', ()=> handleClick('zirkles'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  };

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  };
};

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'akmuo':
      zaidejoZenklas.textContent = '✊'
      break
    case 'lapas':
      zaidejoZenklas.textContent = '✋'
      break
    case 'zirkles':
      zaidejoZenklas.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'akmuo':
      kompoZenklas.textContent = '✊'
      break
    case 'lapas':
      kompoZenklas.textContent = '✋'
      break
    case 'zirkles':
      kompoZenklas.textContent = '✌'
      break
  }
};

function updateScore() {
  if (laimetojas === 'lygu') {
    rezultatas.textContent = "Lygiosios!"
  } else if (laimetojas === 'zaidejas') {
    rezultatas.textContent = 'Laimėjai!'
  } else if (laimetojas === 'kompas') {
    rezultatas.textContent = 'Prapisai 🖕'
  }

  zaidejoTaskaiPa.textContent = `Žaidėjas: ${zaidejoTaskai}`
  kompoTaskaiPa.textContent = `Kompas: ${kompoTaskai}`
}

function updateScoreMessage(laimetojas, playerSelection, computerSelection) {
  if (laimetojas === 'zaidejas') {
    taskuPran.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} nugali ${computerSelection.toLowerCase()}`
    return
  }
  if (laimetojas === 'kompas') {
    taskuPran.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} pralaimi ${computerSelection.toLowerCase()}`
    return
  }

  taskuPran.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} lygiosios su ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return zaidejoTaskai > kompoTaskai
    ? (pabaigosMsg.textContent = 'Laimėjai!')
    : (pabaigosMsg.textContent = 'Prapisai! 🖕')
}

function restartGame() {
  zaidejoTaskai = 0
  kompoTaskai = 0
  rezultatas.textContent = 'Ką rodysi?'
  taskuPran.textContent = 'Pirmas surinkęs 5 taškus laimi'
  zaidejoTaskaiPa.textContent = 'Žaidėjas: 0'
  kompoTaskaiPa.textContent = 'Kompas: 0'
  zaidejoZenklas.textContent = '?'
  kompoZenklas.textContent = '?'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
