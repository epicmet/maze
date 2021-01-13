const { Engine, World, Runner, Render, Bodies } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    option: {
        width: 800,
        height:600
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(100,100,50,50, {
    isStatic: true
});
World.add(world, shape);
