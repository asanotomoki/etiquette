import React from 'react';
import { useState } from 'react';
import './index.css'

const App:React.FC = () => {
  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>エチケット ゲーム</h1>
      <p>{count}</p>
      <button onClick={HandleClick}>count</button>
    </div>
  );
}

export default App;
