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
    this.#initHeroSkills();
  }

  #initBaseAttack() {
    this.#enemy.element.onclick = () => {
      this.#enemy.takeDamage(this.#hero.attack());

      setTimeout(() => {
        this.#hero.takeDamage(this.#enemy.attack());
      }, 1000);

      this.#initButtons();
    };
  }

  #initHeroSkills() {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW": {
          this.#enemy.takeDamage(this.#hero.useSkill());
          break;
        }
        case "KeyE": {
          this.#hero.useRecoveryTechnique();
          break;
        }
        case "KeyQ": {
          this.#enemy.takeDamage(this.#hero.useUltimate());
          break;
        }
      }

      this.#initButtons();
    });
  }

  #initButtons() {
    this.#canUseSkill();
    this.#canUseUltimate();
    this.#canUseRecovery();
  }

  #canUseSkill() {
    if (this.#hero.canUseSkill()) {
      this.#scene.skill.classList.add("active");
    } else {
      this.#scene.skill.classList.remove("active");
    }
  }

  #canUseRecovery() {
    if (this.#hero.canUseRecovery()) {
      this.#scene.recovery.classList.add("active");
    } else {
      this.#scene.recovery.classList.remove("active");
    }
  }

  #canUseUltimate() {
    if (this.#hero.canUseUltimate()) {
      this.#scene.ultimate.classList.add("active");
    } else {
      this.#scene.ultimate.classList.remove("active");
    }
  }
}
