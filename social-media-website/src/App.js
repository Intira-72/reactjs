import './App.css';
import { useState } from 'react';
import ThisText from './ThisText'

function App() {
  const [ showText, setShowText] = useState(false) 

  return (
    <div className="App">     
      <button onClick={() => setShowText(!showText)}>ShowText</button><br />
      { showText && <ThisText />} 
    </div>
  );
};

export default App;
