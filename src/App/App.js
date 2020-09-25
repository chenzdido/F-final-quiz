import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import CreateStudent from '../Studentlist/createStudent';
import StudentAndTeacher from '../studentAndteacher';

// TODO 与外层 studentAndteacher位置互换 （层次解构反了）
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          {/* TODO 改为<Switch> 标签 */}
          <div>
            <Route exact path="/" component={StudentAndTeacher} />
            <Route path="/addTrainee" component={CreateStudent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
