import React from "react";

const QrCode = () => {
  return (
    <>
      <div className="qr_wrapper">
        <div className="qr-message">スマホでQRコードを読んで</div>
        <div className="qr-message">アクセスしてね！！</div>
        <div className="qr-code">
          <img src={"./sustapi-qr-code.png"} alt="qr-code" />
        </div>
      </div>
    </>
  );
};

export default QrCode;
