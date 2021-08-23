import { useEffect, useRef, useState } from "react";
import { Engine, Render, Bodies, World, Composites, Common } from "matter-js";

const Tapioca = (props) => {
  const scene = useRef();
  const engine = useRef(Engine.create());

  const [accelerationX, setAccelerationX] = useState(0);
  const [accelerationY, setAccelerationY] = useState(0);
  const isPressed = useRef(false);

  const deviceMotionRequest = () => {
    if (DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            window.addEventListener("devicemotion", (event) => {
              if (!event.accelerationIncludingGravity) {
                alert("event.accelerationIncludingGravity is null");
                return;
              }
              setAccelerationX(event.accelerationIncludingGravity.x);
              setAccelerationY(event.accelerationIncludingGravity.y);
            });
          }
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      // 加速度センサーがない場合は自然落下
      alert("このデバイスには加速度センサーが搭載されておりません");
      setAccelerationX(0);
      setAccelerationY(-3);
    }
  };

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "#dcac65",
      },
    });

    const stack = Composites.stack(0, 0, 10, 4, 0, 0, (x, y) => {
      return Bodies.circle(x, y, Common.random(70, 80), {
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

  engine.current.gravity.x = accelerationX;
  engine.current.gravity.y = -accelerationY;

  return (
    <div>
      {/* <div>x:{accelerationX},y:{accelerationY},z:{accelerationZ}</div> */}
      <div
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseMove={handleAddCircle}
      >
        <div ref={scene} style={{ width: "100%", height: "100%" }} />
      </div>
      <button
        style={{
          width: "500px",
          height: "100px",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
        onClick={() => deviceMotionRequest()}
      >
        センサー開始
      </button>
    </div>
  );
};

export default Tapioca;
