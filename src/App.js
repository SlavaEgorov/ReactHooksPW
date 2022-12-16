import React, { useState } from 'react';
import './assets/scss/index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}

export default App;
