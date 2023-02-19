import React from "react";
import { useWeatherContext } from "../contexts/weatherContext";
import Ripple from "./Ripples/Ripple";
const Background = ({ width, height, children }) => {
  const { bg } = useWeatherContext();
  return (
    <Ripple
      style={{
        width,
        height,
        background: bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      classes="background"
      rippleColor={bg}
    >
      <div>{children}</div>
    </Ripple>
  );
};

export default Background;
