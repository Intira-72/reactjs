import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0)

  // const [ inputValue, setInputValue ] = useState("")

  // const inputChange = (event) => {
  //   setInputValue(event.target.value)
  // }

  // const [ age, setAge ] = useState(0)

  // const increaseAge = () => {
  //   setAge(age + 1)    
  // }

  return (
    <div className="App">      
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>


      {/* <input type="text" onChange={ inputChange } /> */}
      

      {/* <h1>{ age }</h1>
      <button onClick={ increaseAge }>Increase Age</button> */}
    </div>
  );
};

export default App;
