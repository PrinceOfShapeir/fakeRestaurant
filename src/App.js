import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
   

      
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
