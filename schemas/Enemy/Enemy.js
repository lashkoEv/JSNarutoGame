import { Bar } from "../../components";
import { AdvancedComponent } from "../../core/Component";

import "./Enemy.css";

export class Enemy {
  #BASE_DAMAGE = 10;
  #SKILL_DAMAGE = 30;

  #CHAKRA_RECOVERY = 10;

  #SKILL_CHAKRA_COST = 60;

  #hp;
  #chakra;
  #hpElement;
  #chakraElement;
  #isDead;
  #element;

  constructor() {
<<<<<<< HEAD
    this.#component = new AdvancedComponent();

    this.#hp = 100;
    this.#chakra = 0;
    this.#isDead = false;
    
=======
    this.#hp = 100;
    this.#hpElement = new Bar({ className: "enemy-hp" });

    this.#chakra = 0;
    this.#chakraElement = new Bar({ className: "enemy-chakra" });

    this.#isDead = false;

    this.#element = new AdvancedComponent({
      tagName: "div",
      className: "enemy",
      children: [
        this.#hpElement.bar,
        this.#chakraElement.bar,
        new AdvancedComponent({
          tagName: "img",
          className: "enemy-img",
          src: "/enemy/gaara stand.gif",
        }),
      ],
    });
  }

  get element() {
    return this.#element;
>>>>>>> origin/dev
  }

  attack() {
    // ......
  }

  useSkill() {}

  takeDamage(damage) {}

  #checkHP() {}

  die() {}
}
