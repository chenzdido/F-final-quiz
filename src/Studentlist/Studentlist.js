import React from 'react';

class Studentlist extends React.Component {
  componentDidMount() {
    fetch('http://localhost:8080/students')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h2>学院列表</h2>
        <button type="button">分组学员</button>
      </div>
    );
  }
}

export default Studentlist;
