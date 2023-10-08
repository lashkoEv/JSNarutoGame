import { AdvancedComponent } from "../core/Component";

export class Hero extends AdvancedComponent {
  #BASE_DAMAGE = 10;
  #SKILL_DAMAGE = 30;

  #CHAKRA_RECOVERY = 10;

  #SKILL_CHAKRA_COST = 60;

  #hp;
  #chakra;
  #isDead;
  #component;

  constructor() {
    this.#component = new AdvancedComponent();

    this.#hp = 100;
    this.#chakra = 0;
    this.#isDead = false;
    
  }

  attack() {
    // ......
  }

  useSkill() {}

  takeDamage(damage) {
    // ......
  }

  #checkHP() {}

  die() {}
}
