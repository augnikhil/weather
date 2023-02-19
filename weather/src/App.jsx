import React, { useState } from "react";
import { RiInstallFill } from "react-icons/ri";
import AppContent from "./AppContent";
import { useWeatherContext } from "./contexts/weatherContext";
import { createGlobalStyle } from "styled-components";
const App = () => {
  const { white, black1, bg } = useWeatherContext();

  const GlobalProvider = createGlobalStyle`
  .myscroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.myscroll::-webkit-scrollbar {
  width: 10px;
}
.myscroll::-webkit-scrollbar-thumb {
  /* background: #888; */
  border-radius: 10px;
  background: ${bg};
  border: 1px solid white;
  cursor: pointer;
}
.myscroll::-webkit-scrollbar-thumb:hover {
  /* background: #555; */
  background: ${bg};
  border-radius: 10px;
  cursor: pointer;
}
  `;

  // let deferredPrompt;
  // window.addEventListener("beforeinstallprompt", (e) => {
  //   deferredPrompt = e;
  // });

  // const [isinstalled, setisinstalled] = useState(false);

  // window.addEventListener("DOMContentLoaded", function () {
  //   if (
  //     navigator.standalone ||
  //     window.matchMedia("(display-mode: standalone)").matches ||
  //     window.matchMedia("(display-mode: fullscreen)").matches ||
  //     window.matchMedia("(display-mode: minimal-ui)").matches
  //   ) {
  //     setisinstalled(true);
  //     // console.log("Installed");
  //   } else {
  //     // console.log("Not Installed");
  //   }
  // });

  // window
  //   .matchMedia("(display-mode: standalone)")
  //   .addEventListener("change", (evt) => {
  //     let displayMode = "browser";
  //     if (evt.matches) {
  //       displayMode = "standalone";
  //       setisinstalled(true);
  //     }
  //     // Log display mode change to analytics
  //     // console.log("DISPLAY_MODE_CHANGED", displayMode);
  //   });

  // window.addEventListener("DOMContentLoaded", function () {
  //   window
  //     .matchMedia("(display-mode: standalone)")
  //     .addEventListener("change", function (e) {
  //       if (e.matches) {
  //         setisinstalled(true);
  //       }
  //     });
  //   window
  //     .matchMedia("(display-mode: fullscreen)")
  //     .addEventListener("change", function (e) {
  //       if (e.matches) {
  //         setisinstalled(true);
  //       }
  //     });
  //   window
  //     .matchMedia("(display-mode: minimal-ui)")
  //     .addEventListener("change", function (e) {
  //       if (e.matches) {
  //         setisinstalled(true);
  //       }
  //     });
  // });

  // useEffect(() => {
  //   const know = async () => {
  //     if ("getInstalledRelatedApps" in window.navigator) {
  //       let relatedApps = await window.navigator.getInstalledRelatedApps();
  //       // console.log(relatedApps)
  //       if (relatedApps.length > 0) {
  //         setisinstalled(true);
  //       } else {
  //         setisinstalled(false);
  //       }
  //     }
  //   };
  //   know();
  // }, []);

  document.body.style.background = black1;

  return (
    <>
      <GlobalProvider />
      <div style={{ color: white }}>
        {/* {!isinstalled && (
        <RiInstallFill
          style={{
            position: "absolute",
            top: "5px",
            left: "10px",
            color: white,
            cursor: "pointer",
            fontSize: "25px",
          }}
          onClick={async () => {
            if (deferredPrompt !== null) {
              deferredPrompt.prompt();
              const { outcome } = await deferredPrompt.userChoice;
              if (outcome === "accepted") {
                deferredPrompt = null;
              }
            }
          }}
        />
         )}  */}

        <AppContent />
      </div>
    </>
  );
};

export default App;
