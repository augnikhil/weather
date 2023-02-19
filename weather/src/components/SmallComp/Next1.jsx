import React from "react";

const Next1 = ({time,temp,url}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"10px"
      }}
    >
      <div
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {time}
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {temp}
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={url} alt="" style={{ width: "50px", height: "50px",objectFit:"contain" }} />
      </div>
    </div>
  );
};

export default Next1;
