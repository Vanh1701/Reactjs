import React from "react";

function VvaFuncComp(props) {
  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <h2>Function Component</h2>
      <p>Họ tên: {props.name}</p>
      <p>Tuổi: {props.age}</p>
      <p>Trường: {props.school}</p>
    </div>
  );
}

export default VvaFuncComp;
