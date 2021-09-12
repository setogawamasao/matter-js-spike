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
        <div className="acd-menu">
          <input type="checkbox" id="menu_bar01" className="acd-check" />
          <label htmlFor="menu_bar01" className="acd-label">
            ストロー
          </label>
          <ul id="links01">
            <li onClick={props.addStraw}>
              <button>刺す</button>
            </li>
            <li onClick={props.removeStraw}>
              <button>外す</button>
            </li>
          </ul>
          <input type="checkbox" id="menu_bar02" className="acd-check" />
          <label htmlFor="menu_bar02" className="acd-label">
            味付け
          </label>
          <ul id="links02">
            <li
              onClick={() => {
                props.setBackgroundColor("#FFC0CB");
              }}
            >
              <button>イチゴミルク</button>
            </li>
            <li
              onClick={() => {
                props.setBackgroundColor("#E9ED88");
              }}
            >
              <button>抹茶</button>
            </li>
            <li
              onClick={() => {
                props.setBackgroundColor("#dcac65");
              }}
            >
              <button>ミルクティー</button>
            </li>
            <li>
              <span>
                お好み
                <SliderPicker
                  color={props.backgroundColor}
                  onChangeComplete={handleChangeComplete}
                />
              </span>
            </li>
          </ul>
          <input type="checkbox" id="menu_bar03" className="acd-check" />
          <label htmlFor="menu_bar03" className="acd-label">
            パッケージ
          </label>
          <ul id="links03">
            <li onClick={() => props.setCupImage("logo.PNG")}>
              <button>サスタピ</button>
            </li>
            <li onClick={() => props.setCupImage("alley.png")}>
              <button>The array</button>
            </li>
            <li onClick={() => props.setCupImage("gongcha.png")}>
              <button>Cong tya</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
