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
        })
      );
  }

  render() {
    return (
      <div>
        <div>
          <h2>讲师列表</h2>
        </div>
        <div>
          <ul>
            {Object.keys(this.state.trainers).map((obj) => (
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
                    id
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
