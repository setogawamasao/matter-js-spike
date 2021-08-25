import React, { useState } from "react";

const Modal = (props) => {
  return (
    <>
      {props.isModalOpen && (
        <div id="overlay">
          <div id="content">
            <div>
              <a href={props.imageData} id="myTapioca" download="myTapioca.png">
                download photo
              </a>
            </div>
            <div>
              <a
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  "サステナブルタピオカやってみた！%0D%0A" +
                  "&hashtags=サステナブルタピオカ" +
                  "&url=https://sasutapi.com"
                }
              >
                tweet
              </a>
            </div>
            <img src={props.imageData} style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
