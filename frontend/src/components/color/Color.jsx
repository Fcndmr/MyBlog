import { useState } from "react";
import "./color.css";

function Color() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  return (
    <div className="cont">
      <div className="container">
        <div
          className="box"
          style={{ background: `rgba(${red},${green},${blue},${alpha})` }}
        >
          {`${red}, ${green}, ${blue}, ${alpha}`}
        </div>
        <div className="controls">
          <div className="control-group">
            <label>Red</label>
            <input
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(Number(e.target.value))}
            />
          </div>
          <div className="control-group">
            <label>Green</label>
            <input
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(Number(e.target.value))}
            />
          </div>
          <div className="control-group">
            <label>Blue</label>
            <input
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(Number(e.target.value))}
            />
          </div>
          <div className="control-group">
            <label>Alpha</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
