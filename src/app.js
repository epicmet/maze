const { Engine, World, Runner, Render, Bodies, Mouse, MouseConstraint } = Matter;

const width = 800;
const height = 600;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    option: {
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);
World.add(world, MouseConstraint.create(engine , {
    mouse: Mouse.create(render.canvas)
}));

const walls = [
    Bodies.rectangle(400, 0, 800, 40, {isStatic:true}),
    Bodies.rectangle(400, 600, 800, 40, {isStatic:true}),
    Bodies.rectangle(0, 300, 40, 600, {isStatic:true}),
    Bodies.rectangle(800, 300, 40, 600, {isStatic:true})
];
World.add(world, walls)

for(let i =0; i < 20; i++){
    World.add(world, Bodies.rectangle(Math.random() * 800, Math.random() * 600 , 50, 50))
}