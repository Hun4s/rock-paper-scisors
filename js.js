const galimi = ['zirkles', 'akmuo', 'lapas'];

function getComputerChoice() {
  return galimi[Math.floor(Math.random()*galimi.length)];
};

function game() {

  for (i=0; i<=5; i++) {

    const computerSelection = getComputerChoice();
    const playerSelection = prompt('rinkis');

    function playRound(playerSelection, computerSelection) {

      if (playerSelection.toLowerCase() === computerSelection) {
        return 'Lygu';
      };

      if (playerSelection.toLowerCase() === 'akmuo' && computerSelection === 'labas') {
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

      if (playerSelection.toLowerCase() !== 'lapas' || playerSelection.toLowerCase() !== 'akmuo' || playerSelection.toLowerCase() !== 'zirkles') {
        return 'Ismok rasyt' ; 
      };

    }
    alert(playRound(playerSelection, computerSelection));
  };
};