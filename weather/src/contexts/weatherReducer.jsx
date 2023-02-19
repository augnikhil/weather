export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "CURRENT_LOCATION_WEATHER":
      const { aqi, timezone, weatherdata, city } = action.payload;
      return {
        ...state,
        myweatherdata: weatherdata,
        mycity: city,
        mytimezone: timezone,
        aqidata: aqi,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_CITIES":
      return {
        ...state,
        alllistdata: action.payload,
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "SET_L1_TRUE":
      return {
        ...state,
        l1: true,
      };
    case "SET_L1_FALSE":
      return {
        ...state,
        l1: false,
      };
    case "SET_OPEN_TRUE":
      return {
        ...state,
        isopen: true,
      };
    case "SET_OPEN_FALSE":
      return {
        ...state,
        isopen: false,
      };
    case "SET_NEWL_TRUE":
      return {
        ...state,
        newl: true,
      };
    case "SET_NEWL_FALSE":
      return {
        ...state,
        newl: false,
      };
    case "SET_DARK":
      return {
        ...state,
        isDark: true,
        black1: "rgb(17, 16, 16)",
        black: "black",
        white: "white",
        bg1: "linear-gradient(45deg,rgba(45, 47, 51, 0.8) 17%,rgba(36, 86, 118, 0.7) 50%,rgba(45, 47, 51, 0.7) 80%)",
        bg2: "linear-gradient(45deg,rgba(45, 47, 51, 1) 17%,rgba(36, 86, 118, 1) 50%,rgba(45, 47, 51, 1) 80%)",
        bg: "linear-gradient(-45deg,rgba(45, 47, 51, 0.8) 17%,rgba(36, 86, 118, 0.7) 50%,rgba(45, 47, 51, 0.7) 80%)",
        gray: "gray",
      };
    case "SET_LIGHT":
      return {
        ...state,
        isDark: false,
        black1: "white",
        black: "black",
        white: "black",
        bg1: "linear-gradient(45deg,rgba(209, 212, 219, 0.8) 17%,rgba(68, 151, 203, 0.7) 50%,rgba(209, 212, 219, 0.7) 80%",
        bg2: "linear-gradient(45deg,rgba(209, 212, 219, 1) 17%,rgba(68, 151, 203, 1) 50%,rgba(209, 212, 219, 1) 80%)",
        bg: "linear-gradient(-45deg,rgba(209, 212, 219, 0.8) 17%,rgba(68, 151, 203, 0.7) 50%,rgba(209, 212, 219, 0.7) 80%)",
        gray: "gray",
      };
    default:
      return state;
  }
};
