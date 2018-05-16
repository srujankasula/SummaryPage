import React, { Component } from 'react';
import CardView from './components/CardView';
import Summery from './components/Summery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardView>
          <Summery />
        </CardView>
      </div>
    );
  }
}

export default App;
