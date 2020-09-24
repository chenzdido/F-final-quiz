import axios from 'axios';
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class CreteStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      office: '',
      email: '',
      github: '',
      zoomId: '',
    };
  }

  Cancel = () => {
    window.location.replace('http://localhost:1234');
  };

  CreateTrainee = () => {
    axios.post('http://localhost:8080/trainees', {
      name: this.state.name,
      office: this.state.office,
      email: this.state.email,
      github: this.state.github,
      zoomId: this.state.zoomId,
    });
    window.location.replace('http://localhost:1234');
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangeOffice = (event) => {
    this.setState({
      office: event.target.value,
    });
  };

  handleChangeGithub = (event) => {
    this.setState({
      github: event.target.value,
    });
  };

  handleChangezoomId = (event) => {
    this.setState({
      zoomId: event.target.value,
    });
  };

  render() {
    return (
      <Form onFinish={this.onFinish} name="basicForm">
        <h1>添加学员</h1>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input onChange={this.handleChangeName} />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="邮箱"
          rules={[{ type: 'email', required: true }]}
        >
          <Input onChange={this.handleChangeEmail} />
        </Form.Item>
        <Form.Item name="office" label="办公室" rules={[{ required: true }]}>
          <Input onChange={this.handleChangeOffice} />
        </Form.Item>
        <Form.Item name="zoomId" label="zoomId" rules={[{ required: true }]}>
          <Input onChange={this.handleChangezoomId} />
        </Form.Item>
        <Form.Item name="github" label="Github账号" rules={[{ required: true }]}>
          <Input onChange={this.handleChangeGithub} />
        </Form.Item>
        <Button htmlType="button" onClick={this.CreateTrainee}>
          提交
        </Button>
        <Button type="link" htmlType="button" onClick={this.Cancel}>
          取消
        </Button>
      </Form>
    );
  }
}

export default CreteStudent;
