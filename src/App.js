import Ballpit from "./components/Ballpit/Ballpit";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import Stack from "./components/Stack/Stack";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ShinyText from "./components/ShinyText/ShinyText";
import GradientText from "./components/GradientText/GradientText";
import { useRef, useState } from "react";

const images = [
  {
    id: 1,
    img: "/img/1.jpg",
  },
  {
    id: 2,
    img: "/img/2.jpg",
  },
  {
    id: 3,
    img: "/img/3.jpg",
  },
  {
    id: 4,
    img: "/img/4.jpg",
  },
  {
    id: 5,
    img: "/img/5.jpg",
  },
];

function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    if (audioRef?.current) {
      audioRef?.current?.play();
    }
    setStarted(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "black",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        zIndex: 0,
      }}
    >
      {/* Music */}
      {!started && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Happy birthday 🎂</h2>
          <p style={{ marginBottom: "2rem" }}>
            Click the button below to start the surprise 🎉
          </p>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            onClick={handlePlay}
            showBorder={true}
            className="custom-class p-2"
          >
            - Start -
          </GradientText>
          {/* <button
            onClick={handlePlay}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              backgroundColor: "#ff4081",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Start 🎶
          </button> */}
        </div>
      )}

      <audio ref={audioRef} src="/music/birthday.mp3" loop />

      {started && (
        <>
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              transform: "translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            <SplashCursor />
            <Ballpit
              count={50}
              gravity={3}
              friction={0.8}
              wallBounce={0.95}
              followCursor={false}
              colors={["#ff5252", "#4caf50", "#2196f3", "#ffc107", "#9c27b0"]}
            />
          </div>
          {/* Main content */}
          <div
            className="container pt-5"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="row">
              <div className="col-12 col-md-6 mt-4">
                <TrueFocus
                  sentence="Happy Birthday"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="red"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                  colors="white"
                />
                <div className="mt-5">
                  <ShinyText
                    text="Happy Birthday, Santi! Wishing you a day filled with love, laughter, and unforgettable moments. May this year bring you closer to your dreams and be full of success, good health, and happiness. You deserve all the best today and always!"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 250, height: 250 }}
                  cardsData={images}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
