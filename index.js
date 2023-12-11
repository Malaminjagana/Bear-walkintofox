import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import BearWalking from "./BearWalking/BearWalking.js";
import Fox from "./Fox/Fox.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  BearWalking: new BearWalking({
    x: -210,
    y: -59,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Fox: new Fox({
    x: 165,
    y: -101,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: -154,
    y: 117,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Button3: new Button3({
    x: 158.44156568449034,
    y: 93.47997179883046,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
