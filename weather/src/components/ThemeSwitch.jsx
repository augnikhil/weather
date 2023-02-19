import React, { useState } from "react";
import { useWeatherContext } from "../contexts/weatherContext";
import { i1, i2 } from "../geticon";
const ThemeSwitch = () => {
  const { darkTheme, lightTheme, bg, isDark } = useWeatherContext();
  // console.log(isdark);
  const [jcc, setjcc] = useState(isDark ? "flex-end" : "flex-start");
  const [thec, setthec] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        cursor: "pointer",
        width: "70px",
        // background:"red",
        position: "absolute",
        top: "0px",
        left: "47vw",
      }}
      onClick={() => {
        if (jcc === "flex-start") {
          setthec("my--theme");
          darkTheme();
          setTimeout(() => {
            setjcc("flex-end");
          }, 2050);
        } else {
          setthec("my--theme1");
          lightTheme();
          setTimeout(() => {
            setjcc("flex-start");
          }, 2050);
        }
      }}
    >
      <div
        style={{
          width: "60px",
          height: "22px",
          background: bg,
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          justifyContent: jcc,
          alignItems: "center",
        }}
      >
        <img
          src={jcc === "flex-start" ? i1 : i2}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            marginLeft: jcc === "flex-start" ? "-15px" : "0px",
            marginRight: jcc === "flex-end" ? "-20px" : "0px",
          }}
          className={thec}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
