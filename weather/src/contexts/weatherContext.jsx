import { createContext, useContext, useEffect, useReducer } from "react";
import { WeatherReducer } from "./weatherReducer";
import axios from "axios";
import { gettokenn, requestPermission } from "../firebasefunc";
import { changeToDark, changeToLight } from "../changemeta";
const WeatherContext = createContext();
// const WEATHER_URL = "https://correct-weather.vercel.app";
const WEATHER_URL = "http://localhost:8000";
const initialState = {
  myweatherdata: {},
  mycity: "",
  mytimezone: "",
  aqidata: {},
  token: "",
  alllistdata: [],
  loading: true,
  l1: false,
  isopen: false,
  newl: false,
  isDark:
    localStorage.getItem("mineweathertheme") === null
      ? true
      : localStorage.getItem("mineweathertheme") === "dark"
      ? true
      : false,
  black1: "rgb(17, 16, 16)",
  black: "black",
  white: "white",
  bg1: "linear-gradient(45deg,rgba(45, 47, 51, 0.8) 17%,rgba(36, 86, 118, 0.7) 50%,rgba(45, 47, 51, 0.7) 80%)",
  bg2: "linear-gradient(45deg,rgba(45, 47, 51, 1) 17%,rgba(36, 86, 118, 1) 50%,rgba(45, 47, 51, 1) 80%)",
  bg: "linear-gradient(-45deg,rgba(45, 47, 51, 0.8) 17%,rgba(36, 86, 118, 0.7) 50%,rgba(45, 47, 51, 0.7) 80%)",
  gray: "gray",
};

const WeatherState = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  useEffect(() => {
    requestPermission();
    getLocation();

    if (localStorage.getItem("mineweathertheme") === null) {
      darkTheme();
    } else {
      if (localStorage.getItem("mineweathertheme") === "dark") {
        darkTheme();
      } else {
        lightTheme();
      }
    }
  }, []);

  const darkTheme = () => {
    changeToDark();
    dispatch({
      type: "SET_DARK",
    });
    localStorage.setItem("mineweathertheme", "dark");
  };
  const lightTheme = () => {
    changeToLight();
    dispatch({
      type: "SET_LIGHT",
    });
    localStorage.setItem("mineweathertheme", "light");
  };

  const settoken = (token) => {
    dispatch({ type: "SET_TOKEN", payload: token });
  };

  const getLocation = () => {
    dispatch({ type: "SET_LOADING_TRUE" });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .get(`${WEATHER_URL}/getallapis`)
          .then((res5) => {
            let myapi = res5.data.myapi;
            let cityapi = res5.data.cityapi;
            let freetimezoneapi = res5.data.freetimezoneapi;
            let newaqiapi = res5.data.newaqiapi;
            // console.log(res5.data, position.coords);
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${myapi}&units=metric`
              )
              .then((res1) => {
                axios
                  .get(
                    `https://us1.locationiq.com/v1/reverse.php?key=${cityapi}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                  )
                  .then((res) => {
                    axios
                      .get(
                        `https://api.timezonedb.com/v2.1/get-time-zone?key=${freetimezoneapi}&format=json&by=position&lat=${position.coords.latitude}&lng=${position.coords.longitude}`
                      )
                      .then((res3) => {
                        axios
                          .get(
                            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${myapi}`
                          )
                          // .get(
                          //   `https://api.weatherapi.com/v1/current.json?key=${newaqiapi}&q=${position.coords.latitude},${position.coords.longitude}&aqi=yes`
                          // )
                          .then((res4) => {
                            // console.log(res4.data);
                            gettokenn(
                              settoken,
                              position.coords.latitude,
                              position.coords.longitude,
                              res3.data.zoneName
                            );
                            dispatch({
                              type: "CURRENT_LOCATION_WEATHER",
                              payload: {
                                aqi: res4.data,
                                timezone: res3.data.zoneName,
                                weatherdata: res1.data,
                                city: res.data.display_name,
                              },
                            });
                            dispatch({ type: "SET_LOADING_FALSE" });
                          })
                          .catch((e) => {
                            console.log(e);
                          });
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const getbycity = (lat, lon) => {
    // setisl(false);
    dispatch({ type: "SET_NEWL_TRUE" });
    dispatch({
      type: "CURRENT_LOCATION_WEATHER",
      payload: {
        aqi: {},
        timezone: "",
        weatherdata: {},
        city: "",
      },
    });
    axios
      .get(`${WEATHER_URL}/getallapis`)
      .then((res5) => {
        let myapi = res5.data.myapi;
        let cityapi = res5.data.cityapi;
        let freetimezoneapi = res5.data.freetimezoneapi;
        let newaqiapi = res5.data.newaqiapi;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${myapi}&units=metric`
          )
          .then((res1) => {
            axios
              .get(
                `https://us1.locationiq.com/v1/reverse.php?key=${cityapi}&lat=${lat}&lon=${lon}&format=json`
              )
              .then((res) => {
                axios
                  .get(
                    `https://api.timezonedb.com/v2.1/get-time-zone?key=${freetimezoneapi}&format=json&by=position&lat=${lat}&lng=${lon}`
                  )
                  .then((res3) => {
                    axios
                      .get(
                        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${myapi}`
                      )
                      // .get(
                      //   `https://api.weatherapi.com/v1/current.json?key=${newaqiapi}&q=${lat},${lon}&aqi=yes`
                      // )
                      .then((res4) => {
                        // console.log(res4.data);
                        // setaqidata(res4.data);
                        // setmytimezone(res3.data.zoneName);
                        // setisl(true);
                        // dispatch({ type: "SET_L1_TRUE" });
                        // setmyweatherdata(res1.data);
                        // setmycity(res.data.display_name);
                        // handleClose();

                        dispatch({
                          type: "CURRENT_LOCATION_WEATHER",
                          payload: {
                            aqi: res4.data,
                            timezone: res3.data.zoneName,
                            weatherdata: res1.data,
                            city: res.data.display_name,
                          },
                        });
                        dispatch({ type: "SET_NEWL_FALSE" });
                        closemodal();
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getpropercity = (value) => {
    if (value !== "") {
      // setisl(false);
      dispatch({ type: "SET_L1_TRUE" });
      axios
        .get(`${WEATHER_URL}/getallapis`)
        .then((res5) => {
          let myapi = res5.data.myapi;
          axios
            .get(
              `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=${5}&appid=${myapi}`
            )
            .then((res) => {
              // setisl(true);
              // setalllistdata(res.data);
              dispatch({ type: "SET_CITIES", payload: res.data });
              dispatch({ type: "SET_L1_FALSE" });
              if (res.data.length !== 0) {
                dispatch({ type: "SET_OPEN_TRUE" });
                // handleClickOpen();
              } else {
                alert("Enter a valid city");
              }
            })
            .catch((e) => {
              console.log(e);
              // setisl(true);
              dispatch({ type: "SET_L1_FALSE" });
              alert("Enter a valid city");
            });
        })
        .catch((e) => {
          dispatch({ type: "SET_L1_FALSE" });
          console.log(e);
        });
    } else {
      dispatch({ type: "SET_L1_FALSE" });
      alert("City must not be empty");
    }
  };

  const closemodal = () => {
    dispatch({ type: "SET_OPEN_FALSE" });
  };

  const convertHMS = (value, type) => {
    let unix_timestamp = value;
    var date = new Date(unix_timestamp * 1000);
    let newdate = date.toLocaleString("en-US", { timeZone: state.mytimezone });
    date = new Date(newdate);
    var hours = date.getHours();
    var minute = date.getMinutes();
    var suffix = hours >= 12 ? "pm" : "am";
    var hour = ((hours + 11) % 12) + 1 + " " + suffix;
    hours = hours % 12 || 12;
    let hourandmin = "",
      onlyhour = hour;
    if (minute < 10) {
      hourandmin = hours + ":0" + minute + " " + suffix;
    } else {
      hourandmin = hours + ":" + minute + " " + suffix;
    }

    if (type === "curr") {
      return (
        date.toLocaleDateString("locale", { weekday: "short" }) +
        ", " +
        date.getDate() +
        " " +
        date.toLocaleString("default", { month: "long" }) +
        "  " +
        hourandmin
      );
    } else if (type === "hour") {
      return onlyhour;
    } else if (type === "minutes") {
      return hourandmin;
    } else if (type === "tom") {
      return (
        date.toLocaleDateString("locale", { weekday: "short" }) +
        ", " +
        date.getDate() +
        " " +
        date.toLocaleString("default", { month: "short" })
      );
    }
  };

  const getsplitaqi = (data) => {
    var index = data.toString().indexOf(".");
    if (index === -1) {
      return data;
    } else {
      var returndata =
        data.toString().slice(0, index + 1) +
        data.toString().slice(index + 1, index + 3);
      return returndata;
    }
  };

  const getaqiname = (index) => {
    switch (index) {
      case 1:
        return "Good";

      case 2:
        return "Moderate";

      case 3:
        return "Unhealthy for sensitive group";

      case 4:
        return "Unhealthy";

      case 5:
        return "Very Unhealthy";

      case 6:
        return "Hazardous";
    }
    // switch (index) {
    //   case 1:
    //     return "Good";

    //   case 2:
    //     return "Moderate";

    //   case 3:
    //     return "Unhealthy for sensitive group";

    //   case 4:
    //     return "Unhealthy";

    //   case 5:
    //     return "Very Unhealthy";

    //   case 6:
    //     return "Hazardous";
    // }
  };

  const getaqideg = (index) => {
    switch (index) {
      case 1:
        return -75;

      case 2:
        return -37.5;

      case 3:
        return 0;

      case 4:
        return 37.5;

      case 5:
        return 75;

      case 6:
        return 90;
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        getbycity,
        getpropercity,
        getaqiname,
        getsplitaqi,
        convertHMS,
        closemodal,
        getLocation,
        getaqideg,
        darkTheme,
        lightTheme,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export default WeatherState;
