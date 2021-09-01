import React, { useState } from "react";
import { SliderPicker } from "react-color";

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeComplete = (color) => {
    props.setBackgroundColor(color.hex);
  };
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
        <div className="menu-header">Menu</div>
        <div className="menu-category">
          <div
            className="menu-item"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            ストロー
          </div>
          <div
            className="menu-item"
            onClick={() => {
              props.addStraw();
            }}
          >
            刺す
          </div>
          <div
            className="menu-item"
            onClick={() => {
              props.removeStraw();
            }}
          >
            外す
          </div>
        </div>
        <div className="menu-category">
          <div
            className="menu-item"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            味付け
          </div>
          <div
            className="menu-item"
            onClick={() => {
              props.setBackgroundColor("#FFC0CB");
            }}
          >
            イチゴミルク
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
            onClick={() => {
              props.setBackgroundColor("#dcac65");
            }}
          >
            ミルクティー
          </div>
          <div className="menu-item">
            お好み
            <SliderPicker
              color={props.backgroundColor}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        </div>
        <div className="menu-category">
          <div
            className="menu-item"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            パッケージ
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
            The array
          </div>
          <div
            className="menu-item"
            onClick={() => props.setCupImage("gongcha.png")}
          >
            Cong tya
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
