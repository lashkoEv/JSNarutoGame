import { AdvancedComponent } from "../../core/Component";

import "./Button.css";

export class Button extends AdvancedComponent {
  constructor({ className, children, textContent }) {
    super({
      tagName: "button",
      className: ["button", className].join(" "),
      children,
    });

    this.textContent = textContent;

    return this;
  }
}
