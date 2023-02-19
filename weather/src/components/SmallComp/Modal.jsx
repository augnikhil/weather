import React from "react";
import { useWeatherContext } from "../../contexts/weatherContext";
import { IoMdClose } from "react-icons/io";
import CircularProgress from "@mui/material/CircularProgress";
import Ripple from "../Ripples/Ripple";
const Modal = () => {
  const {
    isopen,
    closemodal,
    alllistdata,
    getbycity,
    newl,
    white,
    black1,
    bg,
  } = useWeatherContext();
  return (
    isopen && (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          background: black1,
        }}
      >
        <IoMdClose
          onClick={() => {
            closemodal();
          }}
          style={{
            color: white,
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            margin: "10px",
            marginTop: "50px",
          }}
        >
          {alllistdata.map((i, ind) => (
            <Ripple
              key={ind}
              rippleColor={bg}
              onClickHandler={() => {
                getbycity(i.lat, i.lon);
              }}
              style={{
                background: bg,
                borderRadius: "20px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <div>
                <h3>{i.name + ", " + i.state + ", " + i.country}</h3>
                <span
                  style={{ fontSize: "13px" }}
                >{`Latitude:${i.lat}, Longitude:${i.lon}`}</span>
              </div>
            </Ripple>
          ))}
        </div>
        {newl && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <CircularProgress style={{ color: white, fontSize: "10px" }} />
          </div>
        )}
      </div>
    )
  );
};

export default Modal;
