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
          <input type="checkbox" id="menu_bar01" className="acd-check" />
          <label htmlFor="menu_bar01" className="acd-label">
            ストロー
          </label>
          <ul id="links01">
            <li>
              <button onClick={props.addStraw}>刺す</button>
            </li>
            <li>
              <button onClick={props.removeStraw}>外す</button>
            </li>
          </ul>
          <input type="checkbox" id="menu_bar02" className="acd-check" />
          <label htmlFor="menu_bar02" className="acd-label">
            味付け
          </label>
          <ul id="links02">
            <li>
              <button
                onClick={() => {
                  props.setBackgroundColor("#FFC0CB");
                }}
              >
                イチゴミルク
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  props.setBackgroundColor("#E9ED88");
                }}
              >
                抹茶
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  props.setBackgroundColor("#dcac65");
                }}
              >
                ミルクティー
              </button>
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
            <li>
              <button onClick={() => props.setCupImage("logo.PNG")}>
                サスタピ
              </button>
            </li>
            <li>
              <button onClick={() => props.setCupImage("alley.png")}>
                The array
              </button>
            </li>
            <li>
              <button onClick={() => props.setCupImage("gongcha.png")}>
                Cong tya
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
