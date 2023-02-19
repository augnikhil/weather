import React from "react";
import { BsCloudSun } from "react-icons/bs";
import { useWeatherContext } from "../../contexts/weatherContext";
const ExtraDetails = ({ width, height }) => {
  const { myweatherdata, white } = useWeatherContext();
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "10px",
      }}
    >
      <span
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <BsCloudSun style={{ color: white, fontSize: "45px" }} />
      </span>
      <span style={{ fontSize: "25px" }}>More Details</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          fontSize: "14px",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>Humidity</span>
          <span>{myweatherdata.current.humidity}%</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>Dew Point</span>
          <span>{myweatherdata.current.dew_point}&deg;C</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>Pressure</span>
          <span>{myweatherdata.current.pressure} mBar</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>UV index</span>
          <span>{myweatherdata.current.uvi}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>Visibility</span>
          <span>{myweatherdata.current.visibility / 1000} Km</span>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;
