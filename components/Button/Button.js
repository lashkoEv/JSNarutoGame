import { Component } from "../../core/Component";

import "./Button.css";

export class Button extends Component {
  constructor({
<<<<<<< HEAD
    tagName = 'button',
=======
    tagName = "button",
>>>>>>> dev
    className,
    textContent,
    html,
    children,
    event,
    ...attrs
  }) {
    super({ tagName, className, textContent, html, children, event, ...attrs });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> dev
