import { AdvancedComponent } from "../core/Component";

export class Hero extends AdvancedComponent {
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
  #component;

  constructor() {
    // ......
    // this.#component = new AdvancedComponent();
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
