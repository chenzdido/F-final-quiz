import React, { Component } from 'react';
import Studentlist from './Studentlist/Studentlist';
import Teacherlist from './Teacherlist/teacherlist';

// TODO 文件名命名大写开头， 且teahcer T大写
// TODO 该文件位置与App 位置应该互换才能体现层级关系，该文件名应该为Home或xxx Container
class StudentAndTeacher extends Component {
  render() {
    return (
      // TODO 整体增加语义化标签的使用
      <div>
        <Teacherlist />
        <Studentlist />
      </div>
    );
  }
}

export default StudentAndTeacher;
