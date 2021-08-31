import React, { useState } from "react";
import Tapioca from "./Tapioca.js";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [accelerationX, setAccelerationX] = useState(0);
  const [accelerationY, setAccelerationY] = useState(0);

  const deviceMotionRequest = () => {
    if (DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("devicemotion", (event) => {
              if (!event.accelerationIncludingGravity) {
                alert("event.accelerationIncludingGravity is null");
                return;
              }
              setAccelerationX(event.accelerationIncludingGravity.x);
              setAccelerationY(event.accelerationIncludingGravity.y);
            });
          } else {
            alert("加速度センサーOFF");
            setAccelerationX(0);
            setAccelerationY(-3);
          }
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      // 加速度センサーがない場合は自然落下
      alert("このデバイスには加速度センサーが搭載されておりません");
      setAccelerationX(0);
      setAccelerationY(-3);
    }
  };

  const start = () => {
    deviceMotionRequest();
    setIsStart(true);
  };

  return (
    <>
      {isStart && (
        <Tapioca accelerationX={accelerationX} accelerationY={accelerationY} />
      )}
      {!isStart && (
        <div style={{ height: "100%" }}>
          <img
            src={"./logo.PNG"}
            alt="logo"
            style={{ width: "99%", display: "block", margin: "100px auto " }}
          />

          <img
            src={"./start-button.PNG"}
            alt="start-button"
            onClick={start}
            style={{
              width: "50%",
              position: "absolute",
              bottom: "10%",
              left: "0",
              right: "0",
              margin: "auto",
            }}
          />
        </div>
      )}
    </>
  );
};

export default App;
