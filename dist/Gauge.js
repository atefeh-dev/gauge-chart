/** @format */
import React from "react";
import "../Style/gauge.css";

const Gauge = ({
  percent
}) => {
  const calculateNewVal = () => {
    const newVal = Number((percent - 0) * 100 / 100);
    return newVal;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "gauge "
  }, /*#__PURE__*/React.createElement("div", {
    class: "sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section section--green",
    style: {
      width: "25%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "section section--orange",
    style: {
      width: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "section section--red",
    style: {
      width: "25%"
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: percent,
    class: "slider"
  }), /*#__PURE__*/React.createElement("span", {
    class: "bubble",
    style: {
      left: `${calculateNewVal()}%`
    }
  }, percent), /*#__PURE__*/React.createElement("div", {
    className: "line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ticks"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "0")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "10")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "20")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "30")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "40")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "50")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "60")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "70")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "80")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "90")), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", null, "100"))));
};

export default Gauge;