/** @format */

import React from "react";
import "../Style/gauge.css";

const Gauge = ({ percent }) => {
  const calculateNewVal = () => {
    const newVal = Number(((percent - 0) * 100) / 100);
    return newVal;
  };
  return (
    <div className="gauge ">
      <div class="sections">
        <div className="section section--green" style={{ width: "25%" }}></div>
        <div className="section section--orange" style={{ width: "50%" }}></div>
        <div className="section section--red" style={{ width: "25%" }}></div>
      </div>
      <input type="range" min="0" max="100" value={percent} class="slider" />
      <span class="bubble" style={{ left: `${calculateNewVal()}%` }}>
        {percent}
      </span>
      <div className="line"></div>
      <div className="ticks">
        <span className="tick tick--big">
          <span>0</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>10</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>20</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>30</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>40</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>50</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>60</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>70</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>80</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>90</span>
        </span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick"></span>
        <span className="tick tick--big">
          <span>100</span>
        </span>
      </div>
    </div>
  );
};
export default Gauge;
