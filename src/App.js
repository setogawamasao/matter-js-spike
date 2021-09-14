import React, { useState } from "react";
import Tapioca from "./Tapioca.js";
import QrCode from "./QrCode.js";
import {
  isIOS,
  isAndroid,
  isWinPhone,
  BrowserView,
  MobileView,
} from "react-device-detect";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [accelerationX, setAccelerationX] = useState(0);
  const [accelerationY, setAccelerationY] = useState(0);

  const start = () => {
    deviceMotionRequest();
    setIsStart(true);
  };

  const deviceMotionRequest = () => {
    if (isIOS) {
      if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              window.addEventListener("devicemotion", (event) => {
                if (!event.accelerationIncludingGravity) {
                  alert("event.accelerationIncludingGravity is null");
                  return;
                }
                // iosで許可
                setAccelerationX(event.accelerationIncludingGravity.x);
                setAccelerationY(event.accelerationIncludingGravity.y);
              });
            } else {
              // iosでキャンセル
              setAccelerationX(0);
              setAccelerationY(-3);
            }
          })
          .catch((e) => {
            alert(e);
          });
      }
    } else if (isAndroid || isWinPhone) {
      window.addEventListener("devicemotion", (event) => {
        if (!event.accelerationIncludingGravity) {
          alert("event.accelerationIncludingGravity is null");
          return;
        }
        // androidはセンサーが逆
        setAccelerationX(event.accelerationIncludingGravity.x * -1);
        setAccelerationY(event.accelerationIncludingGravity.y * -1);
      });
    } else {
      // 加速度センサーがない場合は自然落下
      setAccelerationX(0);
      setAccelerationY(-3);
    }
  };

  return (
    <>
      {!isStart && (
        <div className="top_wrapper">
          <div className="top-logo">
            <img src="sustapi_top_ttl.png" alt="logo" />
          </div>
          <div className="top-drink">
            <img src="sustapi_top_drink.png" alt="drink" />
          </div>
          <div className="top-start" onClick={start}>
            <img src="sustapi_top_btn_start.png" alt="start-button" />
          </div>
        </div>
      )}

      {isStart && (
        <>
          <MobileView>
            <Tapioca
              accelerationX={accelerationX}
              accelerationY={accelerationY}
            />
          </MobileView>
          <BrowserView>
            <QrCode />
          </BrowserView>
        </>
      )}
    </>
  );
};

export default App;
