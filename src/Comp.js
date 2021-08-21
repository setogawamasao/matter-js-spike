import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World } from "matter-js";

function Comp(props) {
  const scene = useRef();
  const isPressed = useRef(false);
  const engine = useRef(Engine.create());

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
        background: "transparent",
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        render: { fillStyle: "#ff0000" },
      }),
      Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "#ff0000" },
      }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, {
        isStatic: true,
        render: { fillStyle: "#ff0000" },
      }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "#ff0000" },
      }),
      Bodies.circle(100, 100, 30, {
        isStatic: true,
        render: { fillStyle: "#ff0000" },
      }),
    ]);

    Engine.run(engine.current);
    Render.run(render);

    // const ball = Bodies.circle(cw / 2, ch / 2, 30, {
    //   mass: 10,
    //   restitution: 1.5,
    //   friction: 0.005,
    //   render: {
    //     fillStyle: "#0000ff",
    //   },
    // });
    // World.add(engine.current.world, [ball]);

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

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Comp;
