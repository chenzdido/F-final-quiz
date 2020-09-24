import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Studentlist from '../Studentlist/Studentlist';
import CreateStudent from '../Studentlist/createStudent';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <div>
            <Route exact path="/" component={Studentlist} />
            <Route path="/addTrainee" component={CreateStudent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
