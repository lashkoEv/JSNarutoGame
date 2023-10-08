import { AdvancedComponent } from "../../core/Component";

import "./Hero.css";

export class Hero {
  #BASE_DAMAGE = 5;
  #SKILL_DAMAGE = 40;
  #ULTIMATE_DAMAGE = 80;

  #CHAKRA_RECOVERY = 10;

  #SKILL_CHAKRA_COST = 40;
  #ULTIMATE_CHAKRA_COST = 80;
  #TECHNIQUE_CHAKRA_COST = 100;

  #CHAKRA_FROM_DEAD_ENEMY = 30;

  #hp;
  #chakra;
  #hpElement;
  #chakraElement;
  #isDead;
  #element;

  constructor() {
    this.#hp = 100;
    this.#hpElement = null;

    this.#chakra = 0;
    this.#chakraElement = null;

    this.#isDead = false;
    this.#element = new AdvancedComponent({
      tagName: "img",
      className: "hero",
      src: "/hero/naruto stand.gif",
    });
  }

  set hpElement(hpElement) {
    this.#hpElement = hpElement;
    this.#resizeHpBar();
  }

  set chakraElement(chakraElement) {
    this.#chakraElement = chakraElement;
    this.#resizeChakraBar();
  }

  get element() {
    return this.#element;
  }

  attack() {
    this.#element.src = "/hero/naruto_attack.gif";
    
    setTimeout(() => {
      this.#element.src = "/hero/naruto stand.gif";
    }, 1000);

    this.#chakra += this.#CHAKRA_RECOVERY;
    this.#resizeChakraBar();

    return this.#BASE_DAMAGE;
  }

  useSkill() {}

  useUltimate() {}

  useRecoveryTechnique() {}

  takeDamage(damage) {
    this.#hp -= damage;
    this.#resizeHpBar();
  }

  #checkHP() {}

  die() {}

  #resizeHpBar() {
    this.#hpElement.setWidth(this.#hp);
  }

  #resizeChakraBar() {
    this.#chakraElement.setWidth(this.#chakra);
  }
}
