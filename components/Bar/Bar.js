import { AdvancedComponent, Component } from "../../core/Component";

import "./Bar.css";

export class Bar {
  #bar;
  #barWrapper;
  #innerBar;

  constructor({ tagName = "div", className, textContent }) {
    this.#innerBar = new Component({
      tagName: "div",
      className: "bar",
    });

    this.#barWrapper = new Component({
      tagName: "div",
      className: "bar-wrapper",
      children: [this.#innerBar],
    });

    this.#bar = new AdvancedComponent({
      tagName,
      className,
      textContent,
      children: [this.#barWrapper],
    });
  }

  get bar() {
    return this.#bar;
  }

  setWidth(width) {
    if (width <= 100 && width >= 0) {
      this.#innerBar.style.width = `${width}%`;
    }
  }
}
