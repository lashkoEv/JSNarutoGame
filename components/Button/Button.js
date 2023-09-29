import { Component } from "../../core/Component";

import "./Button.css";

export class Button extends Component {
  constructor({ tagName = "button", className, textContent, event }) {
    super({ tagName, className });
  }
}
