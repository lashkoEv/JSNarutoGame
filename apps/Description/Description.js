import { AdvancedComponent, Component } from "../../core/Component";
import { Input, Button } from "../../components";
import { render } from "../../core/render";
import { Menu } from "../Menu";

import "./Description.css"

export class Description extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "description",
    });

    const titleWrapper = new AdvancedComponent({
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
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "title",
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
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrForSuperTechnique",
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
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRassengan",
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
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "descrRegen",
          textContent: 'Press "e" to use regeneration of chakra and health'
        }),
      ]
    })

    this.append(titleWrapper, descrSuperTechniqueWrapper, descrRassenganWrapper, descrRegenJutsuWrapper);
  }
}

