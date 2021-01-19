const { Engine, World, Runner, Render, Bodies, } = Matter;

const width = 600;
const height = 600;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: true,
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, {isStatic:true}),
    Bodies.rectangle(width / 2, height, width, 40, {isStatic:true}),
    Bodies.rectangle(0, height / 2, 40, height, {isStatic:true}),
    Bodies.rectangle(width, height / 2, 40, height, {isStatic:true})
];
World.add(world, walls)

for(let i =0; i < 20; i++){
    World.add(world, Bodies.rectangle(Math.random() * 800, Math.random() * 600 , 50, 50) ,{
        render: {
            fillStyle : 'red'
        }
    })
}