import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { useWeatherContext } from "../../contexts/weatherContext";
import i1 from "../../images/26-min.png";
const SunTest = ({ width, height }) => {
  //   const { myweatherdata, convertHMS } = useWeatherContext();
  var spin1 = keyframes``;
  const [ani, setani] = useState(spin1);

  var spin = keyframes`
          0% { transform: rotate(-90deg); }
          
          100% {  transform: rotate(90deg); }
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
    transform: rotate(90deg);
    transform-origin: bottom;
    width: 20px;
    position: absolute;
    top: 115px;
    left: 45%;
    height: 105px;
    display: flex;
    align-items: flex-start;
    animation: ${ani};
    animation-duration: 4s;
    animation-delay: 0s;
    animation-iteration-count: 1;
  `;
  return (
    <div
      ref={ref}
      style={{
        width,
        height,
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "200px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "white",
            position: "absolute",
            top: "220px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "90px",
            width: "300px",
            height: "120px",
            // background:"red",
            overflow:"hidden",
            display: 'flex',
            justifyContent: 'center',
            paddingTop:"10px"
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              borderTop: "2px solid yellow",
              boxShadow: "0px -1px 15px orange",
            }}
          ></div>
        </div>
        <MyRotate>
          <div
            style={{
              width: "20px",
              height: "20px",
              // background:
              //   "radial-gradient(circle, rgba(198,255,0,1) 60%, rgba(255,97,0,1) 50%, rgba(255,0,0,1) 100%)",
              borderRadius: "50%",
              // boxShadow: "0 1rem 5rem yellow,0 1rem 3rem red",
              position: "relative",
            }}
          >
            <img
              src={i1}
              alt=""
              style={{
                fontSize: "10px",
                position: "absolute",
                bottom: "20px",
                width: "40px",
                left: "-10px",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                position: "absolute",
                bottom: "8px",
                width: "55px",
                left: "-10px",
              }}
            >
              {/* {convertHMS(myweatherdata.current.dt, "minutes")} */} 10:08 am
            </div>
          </div>
        </MyRotate>
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "240px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "13px" }}>Sunrise</span>
            <span>7:05 am</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "13px" }}>Sunset</span>
            <span>5:05 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SunTest);
