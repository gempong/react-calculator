import React from "react";

function Output(props) {
  return (
    <div className="output">
        <p>{props.output || 0}</p>
    </div>
  );
}

export default Output;
