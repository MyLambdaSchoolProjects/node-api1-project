import React from 'react';
import {NewName, Home} from './components';
import { Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stretch for node-api-project</h1>
        <nav>
          <Link className='links' to='/'>Home</Link>
          <Link className='links' to='/AddName'>AddName</Link>
        </nav>
      </header>
      
      <>
      <Route exact path="/" component={Home} />
      <Route path="/AddName" component={NewName} />
      </>
    </div>
  );
}

export default App;
