import { Scene } from "../../apps";
import { renderScene } from "../../store/getApps";
import { Enemy } from "../Enemy";
import { Hero } from "../Hero";

export class Game {
  #scene;
  #hero;
  #enemy;

  constructor() {
    this.#hero = new Hero();
    this.#enemy = new Enemy();
    this.#scene = new Scene(this.#hero, this.#enemy);
    this.#hero.hpElement = this.#scene.hpBar;
    this.#hero.chakraElement = this.#scene.chakraBar;
    renderScene(this.#scene);
    this.#initBaseAttack();
  }

  #initBaseAttack() {
    this.#enemy.element.onclick = () => {
      this.#enemy.takeDamage(this.#hero.attack());
    };
  }
}
