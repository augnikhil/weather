importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAlRaOgITc94nO3PbPiS7-sxeksUFgSBVM",
  authDomain: "fir-auth1608.firebaseapp.com",
  projectId: "fir-auth1608",
  storageBucket: "fir-auth1608.appspot.com",
  messagingSenderId: "457182087601",
  appId: "1:457182087601:web:8804e4bc1d6aee6451d590",
  measurementId: "G-0PCHN856R0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // console.log(
  //   "[firebase-messaging-sw.js] Received background message ",
  //   payload
  // );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
      ? payload.notification.image
      : "./ecoml.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


