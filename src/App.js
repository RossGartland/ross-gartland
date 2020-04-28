import React from 'react';
import MyNav from './components/nav/nav.component';
import Home from './pages/home/home.component';
import Portfolio from './pages/portfolio/portfolio.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Home/>
      <Portfolio/>
    </div>
  );
}

export default App;
