import React from 'react';
import './index.css';

class Studentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {},
      studentname: '',
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

  handleValueChange = (event) => {
    this.setState({
      studentname: event.target.value,
    });
  };

  handleAdd = () => {
    const options = {
      method: 'post',
      body: JSON.stringify(this.state.studentname),
      headers: {
        'content-type': 'application/json',
      },
    };
    fetch('http://localhost:8080/addStudent', options);
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
          <input
            type="text"
            placeholder="+添加学员"
            onChange={this.handleValueChange}
            onKeyDown={this.handleAdd}
          />
        </div>
      </div>
    );
  }
}

export default Studentlist;
