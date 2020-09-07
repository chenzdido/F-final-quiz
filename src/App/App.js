import React, { Component } from 'react';
import './App.scss';
import Studentlist from '../Studentlist/Studentlist';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Studentlist />
      </div>
    );
  }
}

export default App;
