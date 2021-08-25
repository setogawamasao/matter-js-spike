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
import html2camvas from "html2canvas";
import HamburgerMenu from "./HamburgerMenu.js";
import Modal from "./Modal.js";

const Tapioca = (props) => {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const isPressed = useRef(false);

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

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;
    const world = engine.current.world;

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

    Composite.add(world, [straw, strawConstraint]);

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
      // Bodies.circle(cw / 2, 0, 50, {
      //   mass: 100,
      //   restitution: 0.01,
      //   friction: 0.01,
      //   render: {
      //     fillStyle: "#0000ff",
      //   },
      //   frictionAir: 0.5,
      // }),
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
  }, []);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 100,
          restitution: 0.01,
          friction: 0.01,
          render: {
            fillStyle: "#0000ff",
          },
          frictionAir: 0.1,
        }
      );
      World.add(engine.current.world, [ball]);
    }
  };

  document.body.style = `background: ${backgroundColor}`;
  engine.current.gravity.x = props.accelerationX;
  engine.current.gravity.y = -props.accelerationY;

  return (
    <>
      {/* <div>x:{accelerationX},y:{accelerationY},z:{accelerationZ}</div> */}
      <div>
        <input type="button" onClick={capture} value="save photo" />
      </div>
      <HamburgerMenu
        setBackgroundColor={setBackgroundColor}
        setCupImage={setCupImage}
      />
      <div
        id="target"
        style={{ backgroundColor: "#dcac65" }}
        // onMouseDown={handleDown}
        // onMouseUp={handleUp}
        // onMouseMove={handleAddCircle}
      >
        <img
          src={cupImage}
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
      <Modal id="modal-main" imageData={imageData} isModalOpen={isModalOpen} />
    </>
  );
};

export default Tapioca;
