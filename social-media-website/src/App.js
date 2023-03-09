import Axios from 'axios';
import { useState } from 'react';
import './App.css';


function App() {
  const [ inputName, setInputName ] = useState("");
  const [ predicted, setPredicted ] = useState({});
  const url = `https://api.agify.io/?name=${ inputName }`;

  const fetchData = () => { 
    Axios.get(url).then((res) => setPredicted(res.data));
    return true;
  }

  return (
    <div className="App">
      <input onChange={(event) => { setInputName(event.target.value) }} type="text" placeholder='Type Your Name' />     
      <button onClick={ fetchData }>Predict Age</button>  
      <h1>{ predicted?.name }</h1>    
      <h1>Predicted Age : { predicted?.age }</h1>
    </div>
  );
};

export default App;
