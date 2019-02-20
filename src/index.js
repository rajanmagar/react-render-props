import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Panda = ({ mouse }) => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_avbrnE1oYAPhs-V-6dRkk5gxg1t_UPXQcwwyl82sry54Ksr9"
      alt="panda"
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    />
  );
};

const Mouse = ({ render }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseEvent = e => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div
      className="App"
      onMouseMove={handleMouseEvent}
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1>Hello Render Props</h1>
      Superman current position {x}, {y}
      {render({ x, y })}
    </div>
  );
};

const MouseTracker = () => {
  return (
    <div>
      <Mouse render={mouse => <Panda mouse={mouse} />} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<MouseTracker />, rootElement);
