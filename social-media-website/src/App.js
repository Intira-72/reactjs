import Axios from 'axios';
import { useState } from 'react';
import './App.css';


function App() {
  const [ excuseData, setExcuseData ] = useState({});  

  const fetchData = (event) => { 
    const url = `https://excuser-three.vercel.app/v1/excuse/${ event.target.value }/`;
    console.log(url);
    Axios.get(url).then((res) => setExcuseData(res.data[0]));
  }

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <div>
        <button onClick={ fetchData } value="family">Family</button>
        <button onClick={ fetchData } value="office">Office</button>
        <button onClick={ fetchData } value="children">Children</button>
        <button onClick={ fetchData } value="college">College</button>
        <button onClick={ fetchData } value="party">Party</button>
      </div>
      <div>
        <button onClick={ fetchData } value="funny">Funny</button>
        <button onClick={ fetchData } value="unbelievable">Unbelievable</button>
        <button onClick={ fetchData } value="developers">Developers</button>
        <button onClick={ fetchData } value="gaming">Gaming</button>
      </div>
      
      <h3>{ excuseData?.category }</h3>
      <p>{ excuseData?.excuse }</p>
    </div>
  );
};

export default App;
