import './App.css';

function App() {
  const isGreen = false;

  return (
    <div className="App">
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
    </div>
  );
};

export default App;
