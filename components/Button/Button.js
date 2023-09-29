import { Component } from "../../core/Component";

import "./Button.css";

export class Button extends Component {
  constructor({
    tagName = "button",
    className,
    textContent,
    html,
    children,
    event,
    ...attrs
  }) {
    super({ tagName, className, textContent, html, children, event, ...attrs });
  }
}
