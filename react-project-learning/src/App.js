import Transaction from './components/Transaction'

const Title = () => {
  return <h1>Account App</h1>
}

const Description = () => {
  return <p>Data Lists</p>
}





function App() {
  return (
    <>      
      <Title />
      <Description />
      <Transaction />
    </>
  );
}

export default App;
