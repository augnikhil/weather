import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useWeatherContext } from "../../contexts/weatherContext";
const Next1Day = ({ date, url, temp,item }) => {
  const [open, setopen] = useState(false);
  const {convertHMS} = useWeatherContext();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          // gap: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "85px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          {date}
        </div>
        <div
          style={{
            width: "85px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "capitalize",
            fontSize: "12px",
          }}
        >
          {/* {desc} */}
          {temp}
        </div>
        <div
          style={{
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={url}
            alt=""
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </div>

        {!open ? (
          <>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "#fdfdfd",
                borderRadius: "50%",
                position: "absolute",
                right: "10px",
                opacity: "0.1",
              }}
            ></div>
            <IoIosArrowDown
              style={{ cursor: "pointer", zIndex: 2 }}
              onClick={() => {
                setopen(true);
              }}
            />
          </>
        ) : (
          <>
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "#fdfdfd",
                borderRadius: "50%",
                position: "absolute",
                right: "10px",
                opacity: "0.1",
              }}
            ></div>
            <IoIosArrowUp
              style={{ cursor: "pointer", zIndex: 2 }}
              onClick={() => {
                setopen(false);
              }}
            />
          </>
        )}
      </div>

      {open && (
        <div className="open">
          <div
            style={{
              padding: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap:"10px"
            }}
          >
            <span style={{ fontSize: "16px", textTransform: "capitalize" }}>
            {item.weather[0].description}
            </span>
            <div style={{ width: "100%" }}>
              <span style={{ fontSize: "14px",marginLeft:"20px" }}>Sunrise & Sunset</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width:"100%"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>Sunrise</span>
                  <span style={{fontSize:"12px"}}>{convertHMS(item.sunrise, "minutes")}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>Sunset</span>
                  <span style={{fontSize:"12px"}}>{convertHMS(item.sunset, "minutes")}</span>
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <span style={{ fontSize: "14px",marginLeft:"20px" }}>More Details</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width:"100%"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>Humidity</span>
                  <span style={{fontSize:"12px"}}>{item.humidity}%</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>Dew Point</span>
                  <span style={{fontSize:"12px"}}>{item.dew_point}&deg;C</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>Pressure</span>
                  <span style={{fontSize:"12px"}}>{item.pressure} mBar</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width:"65%"
                  }}
                >
                  <span style={{fontSize:"12px"}}>UV index</span>
                  <span style={{fontSize:"12px"}}>{item.uvi}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Next1Day;
