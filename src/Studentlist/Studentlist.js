import React from 'react';

class Studentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {},
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

  render() {
    return (
      <div>
        <h2>学院列表</h2>
        <button type="button">分组学员</button>
        <div>
          {Object.keys(this.state.students).map((obj, idx) => (
            <span key={idx}>
              {obj}
              {this.state.students[obj]}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Studentlist;
