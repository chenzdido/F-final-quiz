import React from 'react';
import axios from 'axios';
import './index.scss';
import { Tooltip, Modal } from 'antd';

class Teacherlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: {},
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/trainers?grouped=false')
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          trainers: data,
          trainerId: 0,
        })
      );
  }

  showModal = (event) => {
    this.setState({
      visible: true,
      trainerId: event.target.id,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = () => {
    axios.delete(`http://localhost:8080/trainers/${this.state.trainerId}`);
    this.setState({
      visible: false,
    });
    window.location.replace('http://localhost:1234');
  };

  render() {
    return (
      <div>
        <div>
          <h2>讲师列表</h2>
        </div>
        <div>
          <ul>
            {/* TODO trainers 直接map就可以 */}
            {Object.keys(this.state.trainers).map((obj) => (
              // TODO 没有设置key
              <Tooltip
                title={`name:${this.state.trainers[obj].name} id:${this.state.trainers[obj].id}`}
              >
                <li key={this.state.trainers[obj].id}>
                  <button
                    id={this.state.trainers[obj].id}
                    className="trainer"
                    type="button"
                    onClick={this.showModal}
                  >
                    {this.state.trainers[obj].id}
                    {this.state.trainers[obj].name}
                  </button>
                </li>
              </Tooltip>
            ))}
          </ul>
          <Modal
            title="删除讲师"
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

export default Teacherlist;
