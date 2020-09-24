import React from 'react';
import axios from 'axios';
import './index.scss';
import 'antd/dist/antd.css';
import { Tooltip, Modal } from 'antd';

class Studentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: {},
      visible: false,
      traineeId: 0,
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

  showModal = (event) => {
    this.setState({
      visible: true,
      traineeId: event.target.id,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = () => {
    axios.delete(`http://localhost:8080/trainees/${this.state.traineeId}`);
    this.setState({
      visible: false,
    });
    window.location.replace('http://localhost:1234');
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
                <li key={this.state.trainees[obj].id}>
                  <button
                    id={this.state.trainees[obj].id}
                    className="trainee"
                    type="button"
                    onClick={this.showModal}
                  >
                    {this.state.trainees[obj].id}
                    {this.state.trainees[obj].name}
                  </button>
                </li>
              </Tooltip>
            ))}
            <button type="button">+添加学员</button>
          </ul>
          <Modal
            title="删除学员"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>是否删除？</p>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Studentlist;
