import React from 'react';
import './index.css';

class Studentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/students')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
  }

  handleSubmit = () => {
    const keys = [];
    Object.keys(this.state.students).forEach((v) => {
      keys.push(v);
    });
    const { length } = keys;
    for (let i = 1; i < length; ) {
      const random = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[random]] = [keys[random], keys[i]];
      i += 1;
    }
  };

  render() {
    return (
      <div>
        <div className="studentlist">
          <h2>学员列表</h2>
          <button type="button" className="group" onClick={this.handleSubmit}>
            分组学员
          </button>
        </div>
        <div>
          {Object.keys(this.state.students).map((obj, idx) => (
            <span key={idx} className="student">
              {obj}. &nbsp;
              {this.state.students[obj]}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Studentlist;
