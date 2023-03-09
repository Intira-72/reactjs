import Axios from 'axios';
import { useState } from 'react';
import './App.css';


function App() {
  const [ catFact, setCatFact ] = useState("")
  const url = "https://catfact.ninja/fact"

  const genFact = () => { 
    Axios.get(url).then((res) => setCatFact(res.data.fact))
    return true
  }

  return (
    <div className="App">     
      <button onClick={ genFact }>Generate Cat Fact</button>      
      <p>
        { catFact }
      </p>
    </div>
  );
};

export default App;
