import './App.css';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('O');
  const [winner, setWinner] = useState('');

  const [r1c1, setR1C1] = useState('');
  const [r1c2, setR1C2] = useState('');
  const [r1c3, setR1C3] = useState('');
  const [r2c1, setR2C1] = useState('');
  const [r2c2, setR2C2] = useState('');
  const [r2c3, setR2C3] = useState('');
  const [r3c1, setR3C1] = useState('');
  const [r3c2, setR3C2] = useState('');
  const [r3c3, setR3C3] = useState('');


  const toggle = () => {
    if(token === 'O') return 'X';
    else return 'O';
  }

  const handleReset = () => {
    setR1C1('');
    setR1C2('');
    setR1C3('');
    setR2C1('');
    setR2C2('');
    setR2C3('');
    setR3C1('');
    setR3C2('');
    setR3C3('');
    setWinner('');
  }

  const check = () => {

    if(r1c1 === r1c2 && r1c2 === r1c3) {
      if(r1c3 === 'O') setWinner('Player 1 won');
      else if(r1c3 === 'X') setWinner('Player 2 won');
    }

    if(r2c1 === r2c2 && r2c2 === r2c3) {
      if(r2c3 === 'O') setWinner('Player 1 won');
      else if(r2c3 === 'X') setWinner('Player 2 won');
    }

    if(r3c1 === r3c2 && r3c2 === r3c3) {
      if(r3c3 === 'O') setWinner('Player 1 won');
      else if(r3c3 === 'X') setWinner('Player 2 won');
    }
  }

  return (
    <div className="App">
      <h1> TIC TAC TOE </h1>

      <h2> {winner} </h2>

      <button onClick={() => {setR1C1(token); check(); setToken(toggle());}} className='btn'> {r1c1} </button>
      <button onClick={() => {setR1C2(token); check(); setToken(toggle());}} className='btn'> {r1c2} </button>
      <button onClick={() => {setR1C3(token); check(); setToken(toggle());}} className='btn'> {r1c3} </button>
      <br/>
      <button onClick={() => {setR2C1(token); check(); setToken(toggle());}} className='btn'> {r2c1} </button>
      <button onClick={() => {setR2C2(token); check(); setToken(toggle());}} className='btn'> {r2c2} </button>
      <button onClick={() => {setR2C3(token); check(); setToken(toggle());}} className='btn'> {r2c3} </button>
      <br/>
      <button onClick={() => {setR3C1(token); check(); setToken(toggle());}} className='btn'> {r3c1} </button>
      <button onClick={() => {setR3C2(token); check(); setToken(toggle());}} className='btn'> {r3c2} </button>
      <button onClick={() => {setR3C3(token); check(); setToken(toggle());}} className='btn'> {r3c3} </button>
      <br/>
      <button className='reset' onClick={handleReset}> RESET </button>
    </div>
  );
}

export default App;
