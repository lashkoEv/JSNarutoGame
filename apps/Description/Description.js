import { AdvancedComponent, Component } from "../../core/Component";
import { Input, Button } from "../../components";

import "./description.css"

export class Description extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "description",
    });

    const titleWrapper = new Component({
      tagName: 'div',
      className: 'title-wrapper',
      children: [
        new Button({
          className: 'leave-descrition-btn',
          textContent: "<-- Back",
        }),

        new AdvancedComponent({
          tagName: "div",
          className: "title",
          textContent: 'keyboard layout'
        })
      ]
    })

    // const leaveDescritionBtn = new Button({
    //   className: 'leave-descrition-btn',
    //   textContent: "<-- Back",
    // });

    const desriptionBtn = new Button({
      className: 'super-technique',
      textContent: "1",
    });

    // const title = new AdvancedComponent({
    //   tagName: "div",
    //   className: "title",
    //   textContent: 'keyboard layout'
    // });

    this.append(titleWrapper, desriptionBtn);
  }
}

