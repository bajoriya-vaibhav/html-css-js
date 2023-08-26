function updatescore(score){
  document.querySelector('.score').innerHTML=`Wins : ${score.wins} Loses : ${score.loses} Ties : ${score.ties}`;
}

let score = {'wins':0,'loses':0,'ties':0};

updatescore(score);

function play(player){
  let computer;
  let x = Math.floor(Math.random()*3+1);
  let result;
  
  if(x===1) computer = 'rock';
  else if(x===2) computer = 'paper';
  else computer = 'scissor';

  if(computer === player) {score.ties++;result='tie';}
  else if((computer === 'rock' && player === 'paper') || (computer === 'paper' && player === 'scissor') || (computer === 'scissor' && player === 'rock')) {score.wins++; result = 'win';}
  else {score.loses++; result = 'win';}

  localStorage.setItem('score',JSON.stringify(score));
  updatescore(score);
  // alert(`you : ${player}\tcomputer : ${computer}\n\t${result}\nWin : ${score.wins} Loses : ${score.loses} Ties : ${score.ties}`);
  if(result!=='tie')document.querySelector('.result').innerHTML=`You ${result}`;
  else document.querySelector('.result').innerHTML=`There is a ${result}`;
  document.querySelector('.moves').innerHTML=`You: ${player} | computer: ${computer}`
}