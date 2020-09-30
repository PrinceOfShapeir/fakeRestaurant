import React from 'react';
import logo from './logo.svg';
import './App.css';
import DailySpecial from './components/DailySpecial';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      

        <DailySpecial />
      

    </div>
  );
}

export default App;
