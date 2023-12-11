/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BearWalking extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bear-walk-a", "./BearWalking/costumes/bear-walk-a.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-b", "./BearWalking/costumes/bear-walk-b.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-c", "./BearWalking/costumes/bear-walk-c.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-d", "./BearWalking/costumes/bear-walk-d.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-e", "./BearWalking/costumes/bear-walk-e.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-f", "./BearWalking/costumes/bear-walk-f.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-g", "./BearWalking/costumes/bear-walk-g.svg", {
        x: 130,
        y: 94
      }),
      new Costume("bear-walk-h", "./BearWalking/costumes/bear-walk-h.svg", {
        x: 130,
        y: 94
      })
    ];

    this.sounds = [new Sound("pop", "./BearWalking/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.direction = 90;
    this.goto(-270, -59);
    this.stage.costume = "Boardwalk";
    while (true) {
      this.move(10);
      if (this.compare(this.x, 300) > 0) {
        this.stage.costumeNumber++;
        this.x = -300;
      }
      this.costumeNumber++;
      yield* this.wait(0.2);
      yield;
    }
  }

  *whenbackdropswitchesto() {
    yield* this.wait(2);
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.sayAndWait("who are you", 2);
    this.broadcast("Bear Frage wer bist du");
  }
}
