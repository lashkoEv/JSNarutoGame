import { Component } from "../../core/Component";

import "./Bar.css";

export class Bar extends Component {
  constructor({
    tagName = "div",
    className = "bar-wrapper",
    children = [new Component({
      tagName: "div",
      className: "bar",
    })],
  }) {
    super({ tagName, className, children });
  }
}
