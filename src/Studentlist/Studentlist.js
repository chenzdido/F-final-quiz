import React from 'react';
import axios from 'axios';
import './index.scss';
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';

class Studentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: {},
      studentname: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/trainees?grouped=false')
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          trainees: data,
        })
      );
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
          <ul>
            {Object.keys(this.state.trainees).map((obj) => (
              <Tooltip
                title={`name:${this.state.trainees[obj].name} email:${this.state.trainees[obj].email} office:${this.state.trainees[obj].name} zoomId:${this.state.trainees[obj].zoomId} github:${this.state.trainees[obj].github} id:${this.state.trainees[obj].id}`}
              >
                <li>
                  {this.state.trainees[obj].id}
                  {this.state.trainees[obj].name}
                </li>
              </Tooltip>
            ))}
          </ul>
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
