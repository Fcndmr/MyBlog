import { useState } from "react";
import "./color.css";

function Color() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="cont">
      <div className="container">
        <div
          className="box"
          style={{ background: `rgb(${red},${green},${blue})` }}
        >
          {`${red}, ${green}, ${blue}`}
        </div>
        <div className="controls">
          <div className="control-group">
            <label>Red</label>
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label>Green</label>
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label>Blue</label>
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
