import { AdvancedComponent } from "../../core/Component";
import { Bar, ImageButton } from "../../components";

import "./Scene.css";
export class Scene {
  #scene;
  #hpBar;
  #chakraBar;
  #score;
  #ultimate;
  #skill;
  #recovery;

  constructor() {
    this.#scene = new AdvancedComponent({
      tagName: "div",
      className: "scene",
    });

    this.#hpBar = new Bar({
      className: "hp",
      textContent: "HP:",
    });

    this.#chakraBar = new Bar({
      className: "chakra",
      textContent: "Chakra:",
    });

    this.#score = new AdvancedComponent({
      tagName: "span",
      className: "score",
      textContent: "0",
    });

    const scoreWrapper = new AdvancedComponent({
      tagName: "div",
      className: "score-wrapper",
      textContent: "Score:",
      children: [
        this.#score,

        new AdvancedComponent({
          tagName: "img",
          className: "score-img",
          src: "/score/score2.png",
        }),
      ],
    });

    this.#ultimate = new ImageButton({
      className: "ultimate",
      src: "/score/score.png",
    });
    this.#skill = new ImageButton({
      className: "skill",
      src: "/score/score.png",
    });
    this.#recovery = new ImageButton({
      className: "recovery",
      src: "/score/score.png",
    });

    this.#scene.append(
      this.#hpBar,
      scoreWrapper,
      this.#chakraBar,
      this.#ultimate,
      this.#skill,
      this.#recovery
    );
  }

  get scene() {
    return this.#scene;
  }

  get hpBar() {
    return this.#hpBar;
  }

  get chakraBar() {
    return this.#chakraBar;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    this.#score.textContent = newScore;
  }

  get ultimate() {
    return this.#ultimate;
  }

  get skill() {
    return this.#skill;
  }

  get recovery() {
    return this.#recovery;
  }
}
