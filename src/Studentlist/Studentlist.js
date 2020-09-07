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

  render() {
    return (
      <div>
        <div className="studentlist">
          <h2>学员列表</h2>
          <button type="button" className="group">
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
