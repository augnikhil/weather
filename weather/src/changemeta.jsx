export const changeToDark = () => {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "rgb(17, 16, 16)");
  document
    .querySelector('meta[name="msapplication-navbutton-color"]')
    .setAttribute("content", "rgb(17, 16, 16)");
};

export const changeToLight = () => {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "white");
  document
    .querySelector('meta[name="msapplication-navbutton-color"]')
    .setAttribute("content", "white");
};
