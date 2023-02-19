import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { useWeatherContext } from "../../contexts/weatherContext";
import { BiSearch } from "react-icons/bi";
import CircularProgress from "@mui/material/CircularProgress";
import geticon from "../../geticon";
const Weather = ({ width, height }) => {
  const [newcity, setnewcity] = useState("");
  const { myweatherdata, mycity, convertHMS, getpropercity, l1,white,gray,bg1 } =
    useWeatherContext();
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
        paddingTop: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <img
          src={geticon(myweatherdata.current.weather[0].icon)}
          alt=""
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
        {/* <img
          src={`http://openweathermap.org/img/wn/${myweatherdata.current.weather[0].icon}@4x.png`}
          alt=""
          style={{ width: "100px", height: "100px" }}
        /> */}
        <div
          style={{
            background:
              bg1,
            borderRadius: "20px",
            height: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <input
            type="text"
            value={newcity}
            onChange={(e) => {
              setnewcity(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getpropercity(e.target.value);
              }
            }}
            style={{
              background: "transparent",
              border: "none",
              outline: "0",
              width: "130px",
              color:white
            }}
            placeholder="Search City"
          />
          {!l1 ? (
            <BiSearch
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => {
                getpropercity(newcity);
              }}
            />
          ) : (
            <CircularProgress style={{ color: white, fontSize: "10px" }} />
          )}
        </div>
      </div>
      <span style={{ fontSize: "35px", fontWeight: "bold" }}>
        {myweatherdata.current.temp} &deg;<sup>&nbsp;C</sup>
      </span>
      <span style={{ fontSize: "13px", textTransform: "capitalize" }}>
        {myweatherdata.daily[1].weather[0].description}
      </span>
      <div
        style={{
          background: gray,
          width: "90%",
          height: "2px",
          margin: "5px",
        }}
      ></div>
      <span style={{ fontSize: "13px", wordWrap: "break-word", width: "90%" }}>
        <SlLocationPin style={{ color: white }} /> {mycity}
      </span>
      <span style={{ fontSize: "13px" }}>
        <IoCalendarOutline style={{ color: white, marginRight: "5px" }} />
        {/* 13 Dec,2022 <b> 5:01 AM</b> */}
        {convertHMS(myweatherdata.current.dt, "curr")}
      </span>
    </div>
  );
};

export default Weather;
