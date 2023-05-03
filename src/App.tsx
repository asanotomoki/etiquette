import React from 'react';
import { useState } from 'react';
import './index.css'
import Card from "./components/Card"
import CardList from './components/CardList';

const App: React.FC = () => {
  const [player, setPlayer] = useState("A");
  const [winner, setWinner] = useState<string>();
  const [prevNumber, setPrevNumber] = useState(0);
  const ChangePlayer = (user: string) => {
    setPlayer(user === "A" ? "B" : "A")
  }
  const CheckWinner = (playerCard: number[], user: string) => {
    console.log(playerCard);
    if (!winner && playerCard.length === 0) {
      setWinner(user);
      return (true);
    }
    return (false);
  }
  return (
    <div className="App">
      <h1>エチケット ゲーム</h1>
      <p><strong>Next Player {player}</strong></p>
      {winner && <p><strong>Winner {winner}</strong></p>}
      <CardList user="A" nextPlayer={player} ChangePlayer={ChangePlayer} CheckWinner={CheckWinner} setPrevNumber={setPrevNumber} prevNumber={prevNumber} />
      <CardList user="B" nextPlayer={player} ChangePlayer={ChangePlayer} CheckWinner={CheckWinner} setPrevNumber={setPrevNumber} prevNumber={prevNumber} />
    </div>
  );
}

export default App;
