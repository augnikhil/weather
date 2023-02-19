import React from "react";
import { RiWindyFill } from "react-icons/ri";
import { useWeatherContext } from "../../contexts/weatherContext";
const AQIDet = ({ width, height }) => {
  const { getaqiname, aqidata, getsplitaqi,white } = useWeatherContext();
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
    >
      <span
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <RiWindyFill style={{ color: white, fontSize: "45px" }} /> AQI Details
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          fontSize: "14px",
          marginLeft: "20px",
          marginTop:"40px",
        // alignItems:"center"
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
          <span style={{ width: "100px" }}>CO</span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.co)}</span> */}
          <span>{getsplitaqi(aqidata.list[0].components.co)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>
            NO<sub>2</sub>
          </span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.no2)}</span> */}
          <span>{getsplitaqi(aqidata.list[0].components.no2)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>Ozone</span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.o3)}</span> */}
          <span>{getsplitaqi(aqidata.list[0].components.o3)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>PM10</span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.pm10)}</span> */}
          <span>{getsplitaqi(aqidata.list[0].components.pm10)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>PM2.5</span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.pm2_5)}</span> */}          
          <span>{getsplitaqi(aqidata.list[0].components.pm2_5)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <span style={{ width: "100px" }}>
            SO<sub>2</sub>
          </span>
          {/* <span>{getsplitaqi(aqidata.current.air_quality.so2)}</span> */}
          <span>{getsplitaqi(aqidata.list[0].components.so2)}</span>
        </div>
      </div>
    </div>
  );
};

export default AQIDet;
