import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style/css/index.css";
import App from "./components/App/App";
import Loading from "./components/Loading/Loading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "react-scrollbars-custom";
import Header from "./elements/Header";
import Slogan from "./elements/Slogan";
import About from "./elements/About";
import Footer from "./elements/Footer";
import Streams from "./elements/Streams";
import { Curtains } from "react-curtains";
import Contact from "./elements/Contact";

import { useCurtains } from "react-curtains";

const Overlay = () => {
  const ref = useRef();
  const [ready, setReady] = useState(false);
  const [fs, setFs] = useState(false);

  function fullScreen() {
    if (!fs) {
      gsap.to(".whiteblock", { duration: 2, x: "-100%" });
    }
    setFs(true);
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy(".mainC");
  });

  useEffect(() => {
    function cancelFullscreen(e) {
      if (e.code === "Escape") {
        if (fs) {
          gsap.to(".whiteblock", { duration: 2, x: "0%" });
        }
        setFs(false);
      }
    }
    document.addEventListener("keydown", cancelFullscreen);
    return () => {
      document.addEventListener("keydown", cancelFullscreen);
    };
  });

  useEffect(() => {
    const handleLockchange = (e) => {
      if (document.pointerLockElement === null) {
        setReady(false);
      } else {
        setReady(true);
      }
    };

    document.addEventListener("pointerlockchange", handleLockchange);
    return () => {
      document.removeEventListener("pointerlockchange", handleLockchange);
    };
  });
  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });
  return (
    <div className="h-screen w-screen sm:grid grid-cols-2 overflow-hidden relative">
      <div className="bg-white whiteblock h-3/4 sm:h-screen w-full sm:w-1/2 z-20 mainC absolute left-0 overflow-scroll overflow-x-hidden">
        <Scrollbar>
          <Header />
          <Slogan />
          <About />
         <Contact/>
        

          <Footer />
        </Scrollbar>
      </div>

      <div
        id="test"
        ref={ref}
        className="h-screen w-screen z-10 fixed  right-0"
        onClick={fullScreen}
      >
        <App />
        <div className={ready ? "" : "overlay"}>
          <h2 className={ready ? "hidden" : "start"}>Click to enter</h2>
        </div>
        <Loading />;
      </div>
    </div>
  );
};

ReactDOM.render(
  <Curtains
    pixelRatio={Math.min(1.5, window.devicePixelRatio)}
    autoRender={false} // we'll use gsap ticker in App.js instead
  >
    <Overlay />
  </Curtains>,
  document.getElementById("root")
);
