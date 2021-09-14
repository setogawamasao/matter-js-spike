import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  return (
    <>
      {props.isModalOpen && (
        <div id="overlay">
          <div
            id="content"
            style={{
              backgroundImage: "url(sustapi_top_bg_dot.png)",
              backgroundColor: "#ff2994",
              position: "relative",
              borderRadius: "20px",
            }}
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
              style={{ width: "100%", borderRadius: "20px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <a
                href={props.imageData}
                id="myTapioca"
                download="myTapioca.png"
                style={{
                  width: "100%",
                  backgroundColor: "yellow",
                  color: "red",
                  textDecoration: "none",
                  lineHeight: "28.45px",
                  padding: "0 16px",
                  marginRight: "8px",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                保存
              </a>
              <a
                style={{
                  backgroundColor: "#00acee",
                  width: "100%",
                  textAlign: "center",
                  lineHeight: "24px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  "【バーチャル・タピオカ・アプリ】%0D%0A" +
                  "物理エンジンと加速度センサーで実現！！%0D%0A" +
                  "&hashtags=サステナブルタピオカ" +
                  "&url=https://sustapi.com %0D%0A"
                }
              >
                <img
                  src="2021 Twitter logo - white.png"
                  style={{ width: "20px", padding: "6px 0" }}
                  alt="twitter"
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
