import React, { useState } from "react";
import Background from "./components/Background";
import AQI from "./components/SmallComp/AQI";
import ExtraDetails from "./components/SmallComp/ExtraDetails";
import Next48 from "./components/SmallComp/Next48";
import Sun from "./components/SmallComp/Sun";
import Temperature from "./components/SmallComp/Temperature";
import Weather from "./components/SmallComp/Weather";
import "./weather.css";
import { useWeatherContext } from "./contexts/weatherContext";
import Next8Days from "./components/SmallComp/Next8Days";
import Modal from "./components/SmallComp/Modal";
import { TbCurrentLocation } from "react-icons/tb";
import Loading from "./components/Loading";
import AQIDet from "./components/SmallComp/AQIDet";
import ThemeSwitch from "./components/ThemeSwitch";
import { Container } from "react-ritik-stories";
import { AiFillAppstore, AiOutlineCopy } from "react-icons/ai";
const AppContent = () => {
  const { loading, myweatherdata, mytimezone, getLocation, white, black1 } =
    useWeatherContext();
  const [isStoryView, setisStoryView] = useState(window.innerWidth < 500);

  const A = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <Weather width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const B = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <Temperature width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const C = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <ExtraDetails width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const D = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"310px"} height={"350px"}>
          <Sun width={"310px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const E = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <Next48 width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const F = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <AQI width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const G = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <AQIDet width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };
  const H = () => {
    return (
      <div
        style={{
          width: window.innerWidth - 20,
          height: window.innerHeight - 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background width={"300px"} height={"350px"}>
          <Next8Days width={"300px"} height={"350px"} />
        </Background>
      </div>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ThemeSwitch />
      <Modal />
      {mytimezone !== "" && (
        <>
          <TbCurrentLocation
            style={{
              color: white,
              fontSize: "30px",
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              zIndex: "-1",
            }}
            onClick={() => {
              getLocation();
            }}
          />
          {!isStoryView ? (
            <AiOutlineCopy
              style={{
                color: white,
                fontSize: "30px",
                position: "absolute",
                top: "10px",
                left: "10px",
                cursor: "pointer",
                zIndex: "-1",
              }}
              onClick={() => {
                setisStoryView(true);
              }}
            />
          ) : (
            <AiFillAppstore
              style={{
                color: white,
                fontSize: "30px",
                position: "absolute",
                top: "10px",
                left: "10px",
                cursor: "pointer",
                zIndex: "-1",
              }}
              onClick={() => {
                setisStoryView(false);
              }}
            />
          )}
          {!isStoryView ? (
            <div
              style={{
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Background width={"300px"} height={"350px"}>
                <Weather width={"300px"} height={"350px"} />
              </Background>
              <Background width={"300px"} height={"350px"}>
                <Temperature width={"300px"} height={"350px"} />
              </Background>
              <Background width={"300px"} height={"350px"}>
                <ExtraDetails width={"300px"} height={"350px"} />
              </Background>
              {myweatherdata.current.dt >= myweatherdata.daily[0].sunrise &&
                myweatherdata.current.dt <= myweatherdata.daily[0].sunset && (
                  <Background width={"310px"} height={"350px"}>
                    <Sun width={"310px"} height={"350px"} />
                  </Background>
                )}
              <Background width={"300px"} height={"350px"}>
                <Next48 width={"300px"} height={"350px"} />
              </Background>

              <Background width={"300px"} height={"350px"}>
                <AQI width={"300px"} height={"350px"} />
              </Background>
              <Background width={"300px"} height={"350px"}>
                <AQIDet width={"300px"} height={"350px"} />
              </Background>
              <Background width={"300px"} height={"350px"}>
                <Next8Days width={"300px"} height={"350px"} />
              </Background>
            </div>
          ) : (
            <div
              style={{
                marginTop: "50px",
                // border:"none",
                overflowY: "hidden",
                overflowX: "hidden",
              }}
            >
              <Container
                width={window.innerWidth}
                height={window.innerHeight - 60}
                background={black1}
                comps={
                  myweatherdata.current.dt >= myweatherdata.daily[0].sunrise &&
                  myweatherdata.current.dt <= myweatherdata.daily[0].sunset
                    ? [
                        { name: A },
                        { name: B },
                        { name: C },
                        { name: D },
                        { name: E },
                        { name: F },
                        { name: G },
                        { name: H },
                      ]
                    : [
                        { name: A },
                        { name: B },
                        { name: C },
                        { name: E },
                        { name: F },
                        { name: G },
                        { name: H },
                      ]
                }
                isArrowShown={false}
                tabBarActive={white}
                tabBarNotActive="gray"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AppContent;
