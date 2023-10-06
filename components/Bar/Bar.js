import { AdvancedComponent, Component } from "../../core/Component";

import "./Bar.css";

export class Bar extends AdvancedComponent {
  constructor({ tagName = "div", className, textContent, children }) {
    super({ tagName, className, children });

    this.textContent = textContent;

    this.append(
      new Component({
        tagName: "div",
        className: "bar-wrapper",
        children: [
          new Component({
            tagName: "div",
            className: "bar",
          }),
        ],
      })
    );
  }
}
