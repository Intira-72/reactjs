import './App.css';
import { useState } from 'react';

function App() {
  const [ showValue, setShowValue ] = useState(true)

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
      <button onClick={() => setShowValue(!showValue)}>SHOW / HIDE</button>
      {showValue && <h1>HI MY NAME IS MUSE</h1>}


      {/* <input type="text" onChange={ inputChange } /> */}
      

      {/* <h1>{ age }</h1>
      <button onClick={ increaseAge }>Increase Age</button> */}
    </div>
  );
};

export default App;
