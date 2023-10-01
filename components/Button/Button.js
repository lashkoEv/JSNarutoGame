import { AdvancedComponent } from "../../core/Component";

import "./Button.css";

export class Button extends AdvancedComponent {
<<<<<<< HEAD
  constructor({ className, children, textContent ,events}) {
=======
  constructor({ className, children, textContent, events }) {
>>>>>>> dev
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
