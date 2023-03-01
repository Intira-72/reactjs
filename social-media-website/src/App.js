import './App.css';

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <p><b>Company :</b>{props.company}</p>
      <p><b>Salary :</b>{props.salary}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
};

export default App;
