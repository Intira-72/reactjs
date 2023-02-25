import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import HelloComponent from './components/HelloComponent'
import reportWebVitals from './reportWebVitals';


// Class Component
class HelloClassComponent extends React.Component{
    render(){
        return <h1>Hello, Class Component.</h1>
    }
}

ReactDOM.render(<HelloClassComponent />, document.getElementById('root')); 
reportWebVitals();

