import React from "react";

function Addition(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.level}</td>
      <td>{props.cost}</td>
      <td>{props.chance}</td>
    </tr>
  );
}

export default Addition;
