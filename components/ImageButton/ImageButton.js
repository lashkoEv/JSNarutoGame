import { AdvancedComponent } from "../../core/Component";

import "./ImageButton.css";

export class ImageButton extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, src, ...attrs }) {
    super({
      tagName: "button",
      className: ["img-button", className].join(" "),
      children,
      events,
    });

    this.append(
      new AdvancedComponent({
        tagName: "img",
        className: "img",
        src,
      })
    );

    return this;
  }
}
