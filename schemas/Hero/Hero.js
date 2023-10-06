import { AdvancedComponent } from "../../core/Component";

import "./Hero.css";
export class Hero {
  #BASE_DAMAGE = 15;
  #SKILL_DAMAGE = 40;
  #ULTIMATE_DAMAGE = 80;

  #CHAKRA_RECOVERY = 10;

  #SKILL_CHAKRA_COST = 40;
  #ULTIMATE_CHAKRA_COST = 80;
  #TECHNIQUE_CHAKRA_COST = 100;

  #CHAKRA_FROM_DEAD_ENEMY = 30;

  #hp;
  #chakra;
  #isDead;
  #element;

  constructor() {
    this.#hp = 100;
    this.#chakra = 0;
    this.#isDead = false;
    this.#element = new AdvancedComponent({
      tagName: "img",
      className: "hero",
      src: "/public/hero/naruto stand.gif",
    });
  }

  get element() {
    return this.#element;
  }

  attack() {
    // ......
  }

  useSkill() {}

  useUltimate() {}

  useRecoveryTechnique() {}

  takeDamage(damage) {
    // ......
  }

  #checkHP() {}

  die() {}
}
