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
        <div className="menu_">
          <label for="menu_bar01"> ストロー</label>
          <input type="checkbox" id="menu_bar01" />
          <ul id="links01">
            <li>
              <a onClick={props.addStraw}>刺す</a>
            </li>
            <li>
              <a onClick={props.removeStraw}>外す</a>
            </li>
          </ul>
          <label for="menu_bar02">味付け</label>
          <input type="checkbox" id="menu_bar02" />
          <ul id="links02">
            <li>
              <a
                onClick={() => {
                  props.setBackgroundColor("#FFC0CB");
                }}
              >
                イチゴミルク
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.setBackgroundColor("#E9ED88");
                }}
              >
                抹茶
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.setBackgroundColor("#dcac65");
                }}
              >
                ミルクティー
              </a>
            </li>
            <li>
              <a>
                お好み
                <SliderPicker
                  color={props.backgroundColor}
                  onChangeComplete={handleChangeComplete}
                />
              </a>
            </li>
          </ul>
          <label for="menu_bar03">パッケージ</label>
          <input type="checkbox" id="menu_bar03" />
          <ul id="links03">
            <li>
              <a onClick={() => props.setCupImage("logo.PNG")}>サスタピ</a>
            </li>
            <li>
              <a onClick={() => props.setCupImage("alley.png")}>The array</a>
            </li>
            <li>
              <a onClick={() => props.setCupImage("gongcha.png")}>Cong tya</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
