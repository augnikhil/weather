import React, { useState } from "react";
import { RiWindyFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { useWeatherContext } from "../../contexts/weatherContext";
const AQI = ({ width, height }) => {
  const { getaqiname, aqidata, getaqideg, white, bg2 } = useWeatherContext();
  var spin1 = keyframes``;
  const [ani, setani] = useState(spin1);

  // /* 100% { transform: rotate(${getaqideg(
  //   aqidata.current.air_quality["us-epa-index"]
  // )}deg); } */
  var spin = keyframes`
            0% { transform: rotate(-90deg); }
            
            100% { transform: rotate(${getaqideg(
              aqidata.list[0].main.aqi
            )}deg); }
        `;

  const { ref, inView, entry } = useInView({
    threshold: 0,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setani(spin);
      }
    },
    triggerOnce: true,
  });

  const MyRotate = styled.div`
    width: 60px;
    height: 6px;
    background: ${white};
    position: absolute;
    top: 120px;
    right: 55px;
    transform: rotate(${getaqideg(aqidata.list[0].main.aqi)}deg);
    transform-origin: left;
    animation: ${ani} 3s linear;
    border-radius: 0 50% 50% 0;
    `;
    // /* transform: rotate(
    //   ${getaqideg(aqidata.current.air_quality["us-epa-index"])}deg
    // ); */

  return (
    <div
      style={{
        width,
        height,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "5px",
      }}
      // ref={ref}
    >
      <span
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <RiWindyFill style={{ color: white, fontSize: "45px" }} /> AQI
      </span>
      <span style={{ fontSize: "25px" }}>
        {getaqiname(aqidata.list[0].main.aqi)}
        {/* {getaqiname(aqidata.current.air_quality["us-epa-index"])} */}
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          position: "relative",
          height: "120px",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            // backgroundImage: "conic-gradient(red, yellow, green,blue,black)",
            backgroundImage:
              "conic-gradient(#16d016 0deg, green 30deg, transparent 30deg, transparent 37.5deg, yellow 37.5deg, #b8b836 67.5deg, transparent 67.5deg, transparent 75deg, orange 75deg, #ffa500ad 105deg, transparent 105deg, transparent 112.5deg, red 112.5deg, #ff0000c4 142.5deg, transparent 142.5deg, transparent 150deg, #ff6700 150deg, #ff0000c2 180deg, transparent 180deg)",
            transform: "rotate(-90deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: bg2,
            }}
          ></div>
          <MyRotate />
          <div
            style={{
              width: "25px",
              height: "25px",
              background: white,
              position: "absolute",
              top: "110px",
              left: "108px",
              borderRadius: "100%",
            }}
            ref={ref}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AQI;
