import { useEffect, useRef, useState } from "react";
import {
  Common,
  Engine,
  Render,
  Bodies,
  World,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Composite,
  Vector,
} from "matter-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import html2camvas from "html2canvas";
import HamburgerMenu from "./HamburgerMenu.js";
import Modal from "./Modal.js";

const Tapioca = (props) => {
  const cw = document.body.clientWidth;
  const ch = document.body.clientHeight;
  const scene = useRef();
  const engine = useRef(Engine.create());
  const world = engine.current.world;
  const isShowStraw = useRef(true);

  const [backgroundColor, setBackgroundColor] = useState("#dcac65");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cupImage, setCupImage] = useState("logo.PNG");
  const [imageData, setImageData] = useState();

  const capture = () => {
    setIsModalOpen(true);
    const target = document.getElementById("target");
    html2camvas(target).then((canvas) => {
      const imgData = canvas.toDataURL();
      setImageData(imgData);
    });
  };

  const straw = Bodies.rectangle(cw / 2, ch / 2, 40, ch, {
    render: { fillStyle: "#FF0000" },
  });
  const strawConstraint = Constraint.create({
    pointA: Vector.clone({
      x: straw.position.x,
      y: straw.position.y - (ch / 2) * 0.8,
    }),
    bodyB: straw,
    pointB: { x: 0, y: (-ch / 2) * 0.8 },
    length: 0,
  });

  const handleStraw = (e) => {
    if (isShowStraw.current) {
      // show straw
      Composite.add(world, [straw, strawConstraint]);
      isShowStraw.current = false;
    } else {
      // hide straw
      Composite.remove(world, [straw, strawConstraint]);
      isShowStraw.current = true;
    }
  };

  document.body.style = `background: ${backgroundColor}`;
  engine.current.gravity.x = props.accelerationX;
  engine.current.gravity.y = -props.accelerationY;

  useEffect(() => {
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "#transparent",
      },
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        angularStiffness: 0,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    const stack = Composites.stack(0, 0, 10, 4, 1, 1, (x, y) => {
      return Bodies.circle(x, y, Common.random(30, 30), {
        mass: 10,
        restitution: 0.01,
        friction: 0.01,
        frictionAir: Common.random(0.3, 0.5),
        render: {
          sprite: {
            texture: `./tapioca_${
              Math.floor(Math.random() * (2 - 1 + 1)) + 1
            }.png`,
            //texture: `./tapioca_${11}.png`,
          },
        },
      });
    });

    World.add(engine.current.world, [
      stack,
      Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
    ]);
    Engine.run(engine.current);

    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [ch, cw, world]);

  return (
    <div style={{ position: "relative" }}>
      {/* <div>x:{accelerationX},y:{accelerationY},z:{accelerationZ}</div> */}
      <div
        className="icon-circle"
        onClick={capture}
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          top: "10px",
          left: "10px",
        }}
      >
        <FontAwesomeIcon icon={faCamera} size={"2x"} className="icon" />
      </div>
      <HamburgerMenu
        setBackgroundColor={setBackgroundColor}
        setCupImage={setCupImage}
        handleStraw={handleStraw}
      />
      <div id="target" style={{ backgroundColor: backgroundColor }}>
        <img
          src={cupImage}
          alt="cupImage"
          style={{
            width: "90%",
            position: "absolute",
            top: "20%",
            left: "0",
            right: "0",
            margin: "auto",
          }}
        />
        <div ref={scene} style={{ width: "100%", height: "100%" }} />
      </div>
      {/* modal */}
      <Modal
        imageData={imageData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Tapioca;
