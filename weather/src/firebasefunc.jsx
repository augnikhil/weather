import firebase from "./firebase";

export const gettokenn = (settoken, lat, lon, zone) => {
  try {
    firebase
      .messaging()
      .getToken({
        vapidKey:
          "BH99SX0TL2HbYtmHGIau0W7xLcK7vyjT2jtlm0lErc7a4UwyrqoJuXMWJJWTwrVs-L_APHbHiLYC5xVboGuChfk",
      })
      .then((currentToken) => {
        if (currentToken) {
          // console.log("current token for client: ", currentToken);
          // setisTokenFound(true);
          settoken(currentToken);

          firebase
            .firestore()
            .collection("tokens")
            .doc(currentToken)
            .set({
              token: currentToken,
              lat,
              lon,
              zone,
            })
            .then(() => {
              console.log("done");
            });
        } else {
          // console.log(
          //   "No registration token available. Request permission to generate one."
          // );
          // setisTokenFound(false);
        }
        return currentToken;
      })
      .catch((err) => {
        // console.log("An error occurred while retrieving token. ", err);
        // catch error while creating client token
      });
  } catch (e) {
    console.log(e);
  }
};

const getm = () => {
  firebase.messaging().onMessage((payload) => {
    // setopen(true);
    // console.log("Message received. ", payload);
    // setnotdet({
    //   title: payload.notification.title,
    //   body: payload.notification.body,
    // });
    // setTimeout(() => {
    //   setopen(false);
    // }, 1000);
    // ...
    // alert("" + payload.notification.title + " " + payload.notification.body);
  });
};

export function requestPermission() {
  // console.log("Requesting permission...");
  try {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // console.log("Notification permission granted.");
      }
    });
  } catch (e) {
    console.log(e);
  }
}
