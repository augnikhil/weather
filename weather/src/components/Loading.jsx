import React, { useEffect, useState } from "react";
import i1 from "../images/261.jpeg";
import i2 from "../images/101.jpeg";
import i3 from "../images/271.jpeg";
import i4 from "../images/151.jpeg";
import i5 from "../images/351.jpeg";
import i6 from "../images/281.jpeg";
import i7 from "../images/51.jpeg";
import i8 from "../images/131.jpeg";
import i9 from "../images/31.jpeg";
import i10 from "../images/171.jpeg";
import i11 from "../images/231.jpeg";
import i12 from "../images/401.jpeg";
import i13 from "../images/61.jpeg";
import i14 from "../images/2.21.jpeg";
import { useWeatherContext } from "../contexts/weatherContext";
const Loading = () => {
  const [icon, seticon] = useState(i1);
  const {black} = useWeatherContext();
  useEffect(() => {
    changeicon();
  }, []);
  const changeicon = () => {
    const time = 500;
    setTimeout(() => {
      seticon(i2);
    }, time * 1);
    setTimeout(() => {
      seticon(i3);
    }, time * 2);
    setTimeout(() => {
      seticon(i4);
    }, time * 3);
    setTimeout(() => {
      seticon(i5);
    }, time * 4);
    setTimeout(() => {
      seticon(i6);
    }, time * 5);
    setTimeout(() => {
      seticon(i7);
    }, time * 6);
    setTimeout(() => {
      seticon(i8);
    }, time * 7);
    setTimeout(() => {
      seticon(i9);
    }, time * 8);
    setTimeout(() => {
      seticon(i10);
    }, time * 9);
    setTimeout(() => {
      seticon(i11);
    }, time * 10);
    setTimeout(() => {
      seticon(i12);
    }, time * 11);
    setTimeout(() => {
      seticon(i13);
    }, time * 12);
    setTimeout(() => {
      seticon(i14);
    }, time * 13);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: window.innerHeight,
        // background:"#f7f7f7",
        background:black,
        
        // background:
        //   "linear-gradient(45deg,rgba(45, 47, 51, 0.8) 17%,rgba(36, 86, 118, 0.7) 50%,rgba(45, 47, 51, 0.7) 80%)",
      }}
    >
      <img src={icon} alt="" style={{ width: "200px" }} className="load-img" />
    </div>
  );
};

export default Loading;
