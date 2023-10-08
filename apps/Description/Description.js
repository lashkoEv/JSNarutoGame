import { AdvancedComponent, Component } from "../../core/Component";
import { Button } from "../../components";
import { render } from "../../core/render";
import { Menu } from "../Menu";

import "./Description.css";
import { getGame } from "../../store/getApps";

export class Description extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "description",
    });

    const titleWrapper = new AdvancedComponent({
      tagName: "div",
      className: "title-wrapper",
      children: [
        new Button({
          className: "leave-descrition-btn",
          textContent: "<-- Back",
          events: {
            click: () => {
              getGame();
            },
          },
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "title",
          textContent: "keyboard layout",
        }),
      ],
    });

    const descrSuperTechniqueWrapper = new AdvancedComponent({
      tagName: "div",
      className: "description-wrapper",
      children: [
        new AdvancedComponent({
          tagName: "img",
          className: "super-technique",
          src: "/skills/ultimate3.png",
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrForSuperTechnique",
          textContent: 'Press "Q" to use super jutsu',
        }),
      ],
    });

    const descrRassenganWrapper = new AdvancedComponent({
      tagName: "div",
      className: "description-wrapper",
      children: [
        new AdvancedComponent({
          tagName: "img",
          className: "rassengan",
          src: "/skills/skill3.png",
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRassengan",
          textContent: 'Press "w" to use Rassengan',
        }),
      ],
    });

    const descrRegenJutsuWrapper = new AdvancedComponent({
      tagName: "div",
      className: "description-wrapper",
      children: [
        new AdvancedComponent({
          tagName: "img",
          className: "regen",
          src: "/skills/recovery4.png",
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRegen",
          textContent: 'Press "e" to use regeneration of chakra and health',
        }),
      ],
    });

    this.append(
      titleWrapper,
      descrSuperTechniqueWrapper,
      descrRassenganWrapper,
      descrRegenJutsuWrapper
    );
  }
}
