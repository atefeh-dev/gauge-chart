/** @format */

import React from "react";
import "../Style/gauge.css";
const Gauge = () => {
  return (
    <>
      <p>Gauge chart</p>
      <div className="gauge">
        <input type="range" min="0" max="100" value="38" />
      </div>
    </>
  );
};
export default Gauge;
