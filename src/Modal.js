import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  return (
    <>
      {props.isModalOpen && (
        <div id="overlay">
          <div
            id="content"
            style={{ backgroundColor: "#ff2994", position: "relative" }}
          >
            <div
              className="icon-circle"
              onClick={() => {
                props.setIsModalOpen(false);
              }}
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "1px",
                right: "1px",
                backgroundColor: "#ff2994",
              }}
            >
              <FontAwesomeIcon icon={faTimes} size={"2x"} className="icon" />
            </div>
            <img
              src={props.imageData}
              alt="myTapioca"
              style={{ width: "100%" }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={props.imageData}
                id="myTapioca"
                download="myTapioca.png"
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  textDecoration: "none",
                  lineHeight: "28.45px",
                  padding: "0 16px",
                  marginRight: "8px",
                }}
              >
                保存
              </a>
              <a
                style={{
                  backgroundColor: "#00acee",
                  width: "64px",
                  textAlign: "center",
                  lineHeight: "24px",
                  display: "flex",
                  justifyContent: "center",
                }}
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  "サステナブルタピオカやってみた！%0D%0A" +
                  "&hashtags=サステナブルタピオカ" +
                  "&url=https://sasutapi.com"
                }
              >
                <img
                  src="2021 Twitter logo - white.png"
                  style={{ width: "20px", padding: "6px 0" }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
