/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fox-a", "./Fox/costumes/fox-a.svg", {
        x: 86.17568789833442,
        y: 44.494803938476565
      }),
      new Costume("fox-b", "./Fox/costumes/fox-b.svg", { x: 44, y: 50 }),
      new Costume("fox-c", "./Fox/costumes/fox-c.svg", { x: 48, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Fox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bear Frage wer bist du" },
        this.whenIReceiveBearFrageWerBistDu
      ),
      new Trigger(Trigger.BROADCAST, { name: "Lüge" }, this.whenIReceiveLGe),
      new Trigger(
        Trigger.BROADCAST,
        { name: "warheit" },
        this.whenIReceiveWarheit
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenIReceiveBearFrageWerBistDu() {
    yield* this.sayAndWait("I am  fox from malamin he sent me ", 5);
  }

  *whenIReceiveLGe() {
    yield* this.sayAndWait("Ich bin ein Löve", 2);
  }

  *whenIReceiveWarheit() {
    yield* this.sayAndWait("i am malamin", 2);
  }
}
