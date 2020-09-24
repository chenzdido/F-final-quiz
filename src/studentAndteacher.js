import React, { Component } from 'react';
import Studentlist from './Studentlist/Studentlist';
import Teacherlist from './Teacherlist/teacherlist';

class StudentAndTeacher extends Component {
  render() {
    return (
      <div>
        <Teacherlist />
        <Studentlist />
      </div>
    );
  }
}

export default StudentAndTeacher;
