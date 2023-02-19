import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useWeatherContext } from "../../contexts/weatherContext";
const Temperature = ({ width, height }) => {
  const { myweatherdata,white } = useWeatherContext();
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "20px",
      }}
    >
      <span
        style={{
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CiTempHigh style={{ color: white, fontSize: "45px" }} /> Temperature
      </span>
      <span style={{ fontSize: "25px" }}>
        Feels like&nbsp;
        <b>
        {myweatherdata.current.feels_like} &deg; <sup>C</sup>
        </b>
      </span>
      <span
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Day&nbsp;
        <b
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {myweatherdata.daily[0].temp.day} &deg; <sup>C</sup>
          <BsArrowUp style={{ color: white, fontSize: "25px" }} />
        </b>
      </span>
      <span
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Night&nbsp;
        <b
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {myweatherdata.daily[0].temp.night} &deg; <sup>C</sup>
          <BsArrowDown style={{ color: white, fontSize: "25px" }} />
        </b>
      </span>
    </div>
  );
};

export default Temperature;
