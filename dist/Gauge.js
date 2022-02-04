/** @format */
import React from "react";
import styled from "styled-components";

const Gauge = ({
  percent
}) => {
  const Slider = styled.input`
    position: absolute;
    top: -14px;
    appearance: none;
    width: calc(100% + 16px);
    transform: translateX(-10px);
    height: 10px;
    background: transparent;
    outline: none;
   &::-webkit-slider-thumb {
      appearance: none;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 15px solid #191919;
    }
  
  }`;

  const calculateNewVal = () => {
    const newVal = Number((percent - 0) * 100 / 100);
    return newVal;
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      height: "20%",
      maxWidth: "50%",
      width: "100%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -5%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-7px",
      width: "100%",
      display: " flex",
      justifyContent: " space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section section--green",
    style: {
      width: "25%",
      height: "5px",
      background: "green"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "section section--orange",
    style: {
      width: "50%",
      height: "5px",
      background: "orange"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "section section--red",
    style: {
      width: "25%",
      height: "5px",
      background: "red"
    }
  })), /*#__PURE__*/React.createElement(Slider, {
    type: "range",
    min: "0",
    max: "100",
    value: percent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      left: `${calculateNewVal()}%`,
      position: "absolute",
      top: "-33px",
      transform: "translateX(-50%)",
      fontWeight: "bold"
    }
  }, percent), /*#__PURE__*/React.createElement("div", {
    style: {
      height: " 1px",
      background: "#191919"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "10")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "20")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "30")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "40")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "50")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "60")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tick tick--big"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "70")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "80")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "90")), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "5px",
      width: " 1px",
      background: " #191919",
      position: "relative",
      height: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      position: "absolute",
      top: " 10px",
      webkitTransform: "translateX(-50%)",
      transform: " translateX(-50%)"
    }
  }, "100"))));
};

export default Gauge;