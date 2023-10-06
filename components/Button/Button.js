import { AdvancedComponent } from "../../core/Component";

import "./Button.css";

export class Button extends AdvancedComponent {
  constructor({ className, children, textContent, events }) {
    super({
      tagName: "button",
      className: ["button", className].join(" "),
      children,
      events
    });

    this.textContent = textContent;


    return this;
  }
}
