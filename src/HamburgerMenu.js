import React, { useState } from "react";

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={isOpen ? "menu-trigger is-active" : "menu-trigger"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={isOpen ? "menu is-active" : "menu"}>
        <div
          className="menu-item"
          onClick={() => {
            props.setBackgroundColor("#dcac65");
          }}
        >
          ミルクティー
        </div>
        <div
          className="menu-item"
          onClick={() => {
            props.setBackgroundColor("#E9ED88");
          }}
        >
          抹茶
        </div>
        <div
          className="menu-item"
          onClick={() => props.setCupImage("logo.PNG")}
        >
          サスタピ
        </div>
        <div
          className="menu-item"
          onClick={() => props.setCupImage("alley.png")}
        >
          The alley
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
