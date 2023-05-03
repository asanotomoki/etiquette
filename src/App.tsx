import React from 'react';
import { useState } from 'react';
import './index.css'
import { CardList } from './components/CardList';


const App: React.FC = () => {
  const [player, setPlayer] = useState("A");
  const [winner, setWinner] = useState<string>();
  const [prevNumber, setPrevNumber] = useState(0);
  const [logs, setLog] = useState<number[]>([]);
  const ChangePlayer = (user: string) => {
    setPlayer(user === "A" ? "B" : "A")
  }
  const CheckWinner = (playerCard: boolean[], user: string) => {
    if (winner) return (true);
    if (playerCard.every((card) => card === true)) {
      setWinner(user);
      alert(`Winner ${user}`);
      return (true);
    }
    return (false);
  }
  const pushLog = (id: number) => {
    setLog([...logs, id]);
  }
  return (
    <div className="App">
      <p className='NextPlayer'><strong>Next Player {player}</strong></p>
      {winner && <p className='winnerText'><strong>Winner {winner}</strong></p>}
      <div className="players">
        <CardList user="A" nextPlayer={player} ChangePlayer={ChangePlayer} CheckWinner={CheckWinner} setPrevNumber={setPrevNumber} prevNumber={prevNumber} pushLog={pushLog} />
        <CardList user="B" nextPlayer={player} ChangePlayer={ChangePlayer} CheckWinner={CheckWinner} setPrevNumber={setPrevNumber} prevNumber={prevNumber} pushLog={pushLog} />
      </div>
      <div className="log">
        <ul>
          {logs.map((log, index) => {
            return (
              <li key={index}>
                {`Player${index % 2 === 0 ? "A" : "B"} : `}{log === -1 ? "pass" : log}
              </li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
