import { Component } from "../../core/Component";

import "./Bar.css";

export class Bar extends Component {
  constructor({
    tagName = "div",
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
