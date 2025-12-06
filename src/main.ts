import {Application, Assets, Sprite, Graphics} from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({background: "#1099bb", resizeTo: window});

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  // Load the bunny texture
  const texture = await Assets.load("/assets/bunny.png");

  // Create a bunny Sprite
  const bunny = new Sprite(texture);

  // Center the sprite's anchor point
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen
  bunny.position.set(app.screen.width / 2, app.screen.height / 2);

  // Add the bunny to the stage
  // app.stage.addChild(bunny);

  // Listen for animate update
  app.ticker.add((time) => {
    // Just for fun, let's rotate mr rabbit a little.
    // * Delta is 1 if running at 100% performance *
    // * Creates frame-independent transformation *
    bunny.rotation += 0.1 * time.deltaTime;
  });

  const graphics = new Graphics().rect(50, 50, 100, 100).fill(0xff0000);
  app.stage.addChild(graphics);

  const rectangle = new Graphics()
    .rect(50, 50, 100, 100)
    .fill(0xff0000)
    .circle(200, 200, 50)
    .stroke(0x00ff00)
    // .lineStyle(5)
    .moveTo(300, 300)
    .lineTo(400, 400);

  app.stage.addChild(rectangle);

  const building = new Graphics().rect(500, 100, 300, 500).fill(0xffffff);
  const floor1a = new Graphics().rect(525, 150, 100, 100).fill(0x000000);
  const floor1b = new Graphics().rect(675, 150, 100, 100).fill(0x000000);
  const floor2a = new Graphics().rect(525, 300, 100, 100).fill(0x000000);
  const floor2b = new Graphics().rect(675, 300, 100, 100).fill(0x000000);
  const floor3a = new Graphics().rect(525, 450, 100, 100).fill(0x000000);
  const floor3b = new Graphics().rect(675, 450, 100, 100).fill(0x000000);
  app.stage.addChild(building);
  app.stage.addChild(floor1a);
  app.stage.addChild(floor1b);
  app.stage.addChild(floor2a);
  app.stage.addChild(floor2b);
  app.stage.addChild(floor3a);
  app.stage.addChild(floor3b);
})();
