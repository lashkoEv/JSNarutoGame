import { AdvancedComponent, Component } from "../../core/Component";
<<<<<<< HEAD
import { Input, Button } from "../../components";
import { render } from "../../core/render";
import { Menu } from "../Menu";

import "./Description.css"
=======
import { Button } from "../../components";
import { render } from "../../core/render";
import { Menu } from "../Menu";

import "./Description.css";
>>>>>>> origin/dev

export class Description extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "description",
    });

    const titleWrapper = new AdvancedComponent({
<<<<<<< HEAD
      tagName: 'div',
      className: 'title-wrapper',
      children: [
        new Button({
          className: 'leave-descrition-btn',
          textContent: "<-- Back",
          events: {
            click: ()=>{
              const gameMenu = new Menu({});
              render(app, gameMenu);
            }
          }
=======
      tagName: "div",
      className: "title-wrapper",
      children: [
        new Button({
          className: "leave-descrition-btn",
          textContent: "<-- Back",
          events: {
            click: () => {
              const gameMenu = new Menu({});
              render(app, gameMenu);
            },
          },
>>>>>>> origin/dev
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "title",
<<<<<<< HEAD
          textContent: 'keyboard layout'
        }),
      ]
    })

    const descrSuperTechniqueWrapper = new AdvancedComponent({
      tagName: 'div',
      className: 'description-wrapper',
      children: [
        new AdvancedComponent({
          tagName: 'div',
          className: 'super-technique',
          textContent: "1",
=======
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
>>>>>>> origin/dev
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrForSuperTechnique",
<<<<<<< HEAD
          textContent: 'Press "Q" to use super jutsu'
        }),
      ]
    })

    const descrRassenganWrapper = new AdvancedComponent({
      tagName: 'div',
      className: 'description-wrapper',
      children: [
        new AdvancedComponent({
          tagName: 'div',
          className: 'rassengan',
          textContent: "1",
=======
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
>>>>>>> origin/dev
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRassengan",
<<<<<<< HEAD
          textContent: 'Press "w" to use Rassengan'
        }),
      ]
    })

    const descrRegenJutsuWrapper = new AdvancedComponent({
      tagName: 'div',
      className: 'description-wrapper',
      children: [
        new AdvancedComponent({
          tagName: 'div',
          className: 'regen',
          textContent: "1",
=======
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
>>>>>>> origin/dev
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRegen",
<<<<<<< HEAD
          textContent: 'Press "e" to use regeneration of chakra and health'
        }),
      ]
    })

    this.append(titleWrapper, descrSuperTechniqueWrapper, descrRassenganWrapper, descrRegenJutsuWrapper);
  }
}

=======
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
>>>>>>> origin/dev
