import React from "react";
import { useWeatherContext } from "../../contexts/weatherContext";
import Next1 from "./Next1";
import geticon from "../../geticon";
const Next48 = ({ width, height }) => {
  const { myweatherdata, convertHMS ,bg1} = useWeatherContext();
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "25px" }}>Next 48 Hours</span>
      <div
        style={{
          overflowY: "scroll",
          height: "235px",
          width: "280px",
          borderRadius: "20px",
          background: bg1,
          marginTop: "20px",
        }}
        className="myscroll"
      >
        {myweatherdata.hourly.map((item, index) => (
          <Next1
            time={convertHMS(item.dt, "hour")}
            temp={
              <>
                {item.temp} &deg; <sup>C</sup>
              </>
            }
            url={geticon(item.weather[0].icon)}
            // url={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Next48;
