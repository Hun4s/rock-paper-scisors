const galimi = ['zirkles', 'akmuo', 'lapas'];
function getComputerChoice() {
  return galimi[Math.floor(Math.random()*galimi.length)];
};

const zirklesbtn = document.querySelector('#zirklesbtn');
zirklesbtn.addEventListener('click', () => {
  const playerSelection = 'zirkles';
  let computerSelection = getComputerChoice();
  const container = document.querySelector('#rez');
  const content = document.createElement('div');
  content.classList.add('rezultatas');
  playRound(playerSelection, computerSelection);
  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
});

const lapasbtn = document.querySelector('#lapasbtn');
lapasbtn.addEventListener('click', () => {
  const playerSelection = 'lapas';
  let computerSelection = getComputerChoice();
  const container = document.querySelector('#rez');
  const content = document.createElement('div');
  content.classList.add('rezultatas');
  playRound(playerSelection, computerSelection);
  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
});

const akmuobtn = document.querySelector('#akmuobtn');
akmuobtn.addEventListener('click', () => {
  const playerSelection = 'akmuo';
  let computerSelection = getComputerChoice();
  const container = document.querySelector('#rez');
  const content = document.createElement('div');
  content.classList.add('rezultatas');
  playRound(playerSelection, computerSelection);
  content.textContent = playRound(playerSelection, computerSelection);
  container.appendChild(content);
});

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection.toLowerCase() === computerSelection) {
    return 'Lygu';
  };

  if (playerSelection.toLowerCase() === 'akmuo' && computerSelection === 'lapas') {
    return 'Prapisai, lapas nugali akmeni' ;
  };

  if (playerSelection.toLowerCase() === 'akmuo' && computerSelection === 'zirkles') {
    return 'Laimejai, akmuo nugali zirkles' ;
  };

  if (playerSelection.toLowerCase() === 'zirkles' && computerSelection === 'akmuo') {
    return 'Prapisai, akmuo nugali zirkles' ;
  };

  if (playerSelection.toLowerCase() === 'zirkles' && computerSelection === 'lapas') {
    return 'Laimejai, zirkles nugali lapa' ;
  };

  if (playerSelection.toLowerCase() === 'lapas' && computerSelection === 'zirkles') {
    return 'Prapisai, zirkles nugali lapa' ;
  };

  if (playerSelection.toLowerCase() === 'lapas' && computerSelection === 'akmuo') {
    return 'Laimejai, lapas nugali akmeni' ;
  };
};

