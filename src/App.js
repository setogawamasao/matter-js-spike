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
          <img src={"./sastapi_top_ttl.png"} alt="logo" className="top-logo" />

          <img
            src={"./sastapi_top_drink.png"}
            alt="drink"
            className="top-drink"
          />

          <img
            src={"./sastapi_top_btn_start.png"}
            alt="start-button"
            onClick={start}
            className="top-start"
          />
        </div>
      )}
    </>
  );
};

export default App;
