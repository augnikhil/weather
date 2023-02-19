import React from "react";
import { useWeatherContext } from "../../contexts/weatherContext";
import Next1Day from "./Next1Day";
import geticon from "../../geticon";
const Next8Days = ({ width, height }) => {
  const { myweatherdata, convertHMS,bg1 } = useWeatherContext();
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
      <span style={{ fontSize: "25px" }}>Next 8 Days</span>
      <div
        style={{
          overflowY: "scroll",
          height: "235px",
          width: "280px",
          borderRadius: "20px",
          background:
            bg1,
            marginTop:"20px"
        }}
        className="myscroll"
      >
        {myweatherdata.daily.map((item, index) => (
          <Next1Day
            date={convertHMS(item.dt, "tom")}
            temp={
              <>
                {item.temp.max}&deg;&nbsp;/&nbsp;{item.temp.min}&deg;
              </>
            }
            url={geticon(item.weather[0].icon)}
            // url={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
            key={index}
            desc={item.weather[0].description}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Next8Days;
