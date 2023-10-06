import { AdvancedComponent } from "../../core/Component";
import { Input, Button, Bar, ImageButton } from "../../components";

import "./Scene.css";
export class Scene extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "game",
      children,
      events,
      html,
      ...attrs,
    });

    this.append(
      new Bar({
        className: "hp",
        textContent: "HP:",
      }),

      new Bar({
        className: "chakra",
        textContent: "Chakra:",
      }),

      new AdvancedComponent({
        tagName: "div",
        className: "score-wrapper",
        textContent: "Score:",
        children: [
          new AdvancedComponent({
            tagName: "span",
            className: "score",
            textContent: "0",
          }),

          new AdvancedComponent({
            tagName: "img",
            className: "score-img",
            src: "/score/score.png",
          }),
        ],
      }),

      new ImageButton({className: "ultimate", src: "/score/score.png"}), 
      new ImageButton({className: "skill", src: "/score/score.png"}), 
      new ImageButton({className: "recovery", src: "/score/score.png"}), 

    );
  }
}
