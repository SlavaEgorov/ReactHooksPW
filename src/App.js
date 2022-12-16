import React, { useState } from 'react';
import './assets/scss/index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Click me
      </button>
    </div>
  );
}

export default App;
