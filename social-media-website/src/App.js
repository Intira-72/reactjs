import './App.css';
import User from './User';
import Planets from './Planets'

function App() {
  const planets = [
      {name: "Mars", isGasPlanet: false},
      {name: "Earth", isGasPlanet: false},
      {name: "Jupiter", isGasPlanet: true},
      {name: "Venus", isGasPlanet: false},
      {name: "Neptune", isGasPlanet: true},
      {name: "Uranus", isGasPlanet: true},
  ]

  return (
    <div className="App">
      { planets.map((planet, key) => {
        return (
          planet.isGasPlanet ? <Planets name={ planet.name } key={key} /> : null
        )
      }) }
    </div>
  );
};

export default App;
