import { Component } from "../../core/Component";

export class Input extends Component {
  constructor({ tagName, className, children }) {
    super({ tagName, className, children });
    const element = document.createElement("input");

    element.className = ["input", className].join("");

    return element;
  }
}