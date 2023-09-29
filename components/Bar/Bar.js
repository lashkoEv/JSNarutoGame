import { Component } from "../../core/Component";

import "./Bar.css";

export class Bar extends Component {
  constructor({
    tagName = "div",
    className,
    children,
  }) {
    super({ tagName, className, children });
  }
}
