import { AdvancedComponent } from "../../core/Component";

import "./Input.css";

export class Input extends AdvancedComponent {
  constructor({ className, children, placeholder }) {
    super({
      tagName: "input",
      className: ["input", className].join(""),
      children,
      placeholder,
    });

    return this;
  }
}
