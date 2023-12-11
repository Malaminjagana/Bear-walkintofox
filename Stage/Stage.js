/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Boardwalk", "./Stage/costumes/Boardwalk.png", {
        x: 480,
        y: 360
      }),
      new Costume("Castle 2", "./Stage/costumes/Castle 2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Woods", "./Stage/costumes/Woods.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
