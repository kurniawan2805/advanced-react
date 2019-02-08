import React, {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here's a button to track how many times you click it:
      <button onClick={() => setCounter(counter + 1)}> {counter} </button>
    </div>
  );
};

export default App;
