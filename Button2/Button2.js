/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 58.982,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button2/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warheit oder Lüge" },
        this.whenIReceiveWarheitOderLGe
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWarheitOderLGe() {
    this.visible = true;
  }
}
