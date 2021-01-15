import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lister from './components/Lister';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="App-div"> 
            <img src={logo} className="App-logo" alt="logo"/>
            <span>React microblog</span>
          </div>
                    
      </header>
      <section className="App-body">
          <Lister />
      </section>
    </div>
  );
}

export default App;
