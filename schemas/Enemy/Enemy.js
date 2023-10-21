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
  #elementImg;

  constructor() {
    this.#hp = 100;
    this.#hpElement = new Bar({ className: "enemy-hp" });

    this.#chakra = 0;
    this.#chakraElement = new Bar({ className: "enemy-chakra" });

    this.#isDead = false;

    this.#elementImg = new AdvancedComponent({
      tagName: "img",
      className: "enemy-img",
      src: "/enemy/Gaara/gaara stand.gif",
    });

    this.#element = new AdvancedComponent({
      tagName: "div",
      className: "enemy",
      children: [
        this.#hpElement.bar,
        this.#chakraElement.bar,
        this.#elementImg,
      ],
    });

    this.#resizeHpBar();
    this.#resizeChakraBar();

  }

  get element() {
    return this.#element;
  }

  attack() {
    this.#elementImg.src = "/enemy/Gaara/gaara_attack.gif";
    
    setTimeout(() => {
      this.#elementImg.src = "/enemy/Gaara/gaara stand.gif";
    }, 1000);

    this.#chakra += this.#CHAKRA_RECOVERY;
    this.#resizeChakraBar();

    return this.#BASE_DAMAGE;
  }

  useSkill() {}

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

  #generateName(){}

  #randomEnemy(){
    return 13;
  }
}
