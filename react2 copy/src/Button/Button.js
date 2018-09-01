import React from "react";

const button = (props) => {
  return (
    <div className="button-container">
      <p>1 - 10</p>
      <button onClick={props.clickedStand}>Standard</button>
      <button onClick={props.clickedExp}>Expert</button>
      <p>1 - 100</p>
    </div>
  );
};

export default button;
