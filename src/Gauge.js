/** @format */

import React from "react";
import styled from "styled-components";

const Gauge = ({ percent }) => {
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
    const newVal = Number(((percent - 0) * 100) / 100);
    return newVal;
  };
  return (
    <div
      style={{
        position: "absolute",
        height: "20%",
        maxWidth: "50%",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -5%)",
      }}>
      <div
        style={{
          position: "absolute",
          top: "-7px",
          width: "100%",
          display: " flex",
          justifyContent: " space-between",
        }}>
        <div
          className="section section--green"
          style={{ width: "25%", height: "5px", background: "green" }}></div>
        <div
          className="section section--orange"
          style={{ width: "50%", height: "5px", background: "orange" }}></div>
        <div
          className="section section--red"
          style={{ width: "25%", height: "5px", background: "red" }}></div>
      </div>
      <Slider type="range" min="0" max="100" value={percent} />
      <span
        style={{
          left: `${calculateNewVal()}%`,
          position: "absolute",
          top: "-33px",
          transform: "translateX(-50%)",
          fontWeight: "bold",
        }}>
        {percent}
      </span>
      <div style={{ height: " 1px", background: "#191919" }}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            0
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            10
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            20
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            30
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            40
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span className="tick tick--big">
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            50
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            60
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span className="tick tick--big">
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            70
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            80
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            90
          </span>
        </span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
          }}></span>
        <span
          style={{
            height: "5px",
            width: " 1px",
            background: " #191919",
            position: "relative",
            height: "10px",
          }}>
          <span
            style={{
              fontSize: "14px",
              position: "absolute",
              top: " 10px",
              webkitTransform: "translateX(-50%)",
              transform: " translateX(-50%)",
            }}>
            100
          </span>
        </span>
      </div>
    </div>
  );
};
export default Gauge;
