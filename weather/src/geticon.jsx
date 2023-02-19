import i1 from "./images/26-min.png";
import i2 from "./images/10-min.png";
import i3 from "./images/27-min.png";
import i4 from "./images/15-min.png";
import i5 from "./images/35-min.png";
import i6 from "./images/28-min.png";
import i7 from "./images/5-min.png";
import i8 from "./images/13-min.png";
import i9 from "./images/3-min.png";
import i10 from "./images/17-min.png";
import i11 from "./images/23-min.png";
import i12 from "./images/40-min.png";
import i13 from "./images/6-min.png";
import i14 from "./images/2.2-min.png";
const geticon = (url) => {
  switch (url) {
    case "01d":
      return i1;

    case "01n":
      return i2;

    case "02d":
      return i3;

    case "02n":
      return i4;

    case "03d":
      return i5;

    case "03n":
      return i5;

    case "04d":
      return i6;

    case "04n":
      return i6;

    case "09d":
      return i7;

    case "09n":
      return i7;

    case "10d":
      return i8;

    case "10n":
      return i9;

    case "11d":
      return i10;

    case "11n":
      return i10;

    case "13d":
      return i11;

    case "13n":
      return i12;

    case "50d":
      return i13;

    case "50n":
      return i14;
  }
};

export { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14 };

export default geticon;
