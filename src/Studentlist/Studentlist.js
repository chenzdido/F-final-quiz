import React from 'react';
import axios from 'axios';
import './index.scss';
import 'antd/dist/antd.css';
import { Tooltip, Modal } from 'antd';
import { Link } from 'react-router-dom';

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
      // TODO 可以对内部一些内容抽象成复用组件，例如 PersonnelItem，AddButton 等
      <div>
        <div className="studentlist">
          <h2>学员列表</h2>
          <button type="button" className="group" onClick={this.handleSubmit}>
            分组学员
          </button>
        </div>
        <div>
          <ul>
            {/* TODO trainees 直接map就可以了 */}
            {Object.keys(this.state.trainees).map((obj) => (
              // Tooltip 没有设置key
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
            <Link to="/addTrainee">
              <button type="button">+添加学员</button>
            </Link>
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
