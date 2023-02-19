import React from "react";
import "./button.css";

const Ripple = ({
  children = <></>,
  onClickHandler = () => {},
  style = { position: "relative", overflow: "hidden" },
  rippleColor = "rgba(255, 255, 255, 0.5)",
  classes = "",
}) => {
  const showRipple = (event) => {
    const elem = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(elem.clientWidth, elem.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - elem.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - elem.offsetTop - radius}px`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple 600ms linear";
    circle.style.background = rippleColor;
    const ripple = elem.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    elem.appendChild(circle);
  };
  return (
    <div
      onClick={() => {
        setTimeout(() => {
          onClickHandler();
        }, 600);
      }}
    >
      {React.cloneElement(children, {
        onMouseDown: showRipple,
        style: { ...style, position: "relative", overflow: "hidden" },
        className: classes,
      })}
    </div>
  );
};

export default Ripple;
