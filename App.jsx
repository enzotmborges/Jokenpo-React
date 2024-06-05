import React, { useState } from 'react';
import App from './App.css'

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const choices = ['pedra', 'papel', 'tesoura'];

  const playGame = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if (userChoice === computerChoice) {
      setResult('Empate! ✌');
    } else if (
      (userChoice === 'pedra' && computerChoice === 'tesoura') ||
      (userChoice === 'papel' && computerChoice === 'pedra') ||
      (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
      setResult('Você ganhou! 👍');
      setWins(wins + 1);
    } else {
      setResult('Você perdeu! 👎');
      setLosses(losses + 1);
    }
  };

  return (
    <div className="game-container">
      <h1>Escolha uma opção:</h1>
      <div className="choice-buttons">
        <button onClick={() => playGame('pedra')}>
          <img src={require('./img/pedra.png')} alt="Pedra" className="choice-image" />
        </button>
        <button onClick={() => playGame('papel')}>
          <img src={require('./img/papel.png')} alt="Papel" className="choice-image" />
        </button>
        <button onClick={() => playGame('tesoura')}>
          <img src={require('./img/tesoura.png')} alt="Tesoura" className="choice-image" />
        </button>
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <h3>Sua escolha: {userChoice}</h3>
          <h2>{result}</h2>
          <p>Vitórias: {wins}</p>
          <p>Derrotas: {losses}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
