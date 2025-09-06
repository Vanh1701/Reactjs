import React, { Component } from "react";

class VvaClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: "Lập trình ReactJS",
      year: 2025
    };
  }

  render() {
    return (
      <div style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
        <h2>Class Component</h2>
        <p>Họ tên: {this.props.name}</p>
        <p>Tuổi: {this.props.age}</p>
        <p>Ngành học: {this.props.major}</p>
        <p>Sở thích (state): {this.state.hobby}</p>
        <p>Năm hiện tại (state): {this.state.year}</p>
      </div>
    );
  }
}

export default VvaClassComp;
