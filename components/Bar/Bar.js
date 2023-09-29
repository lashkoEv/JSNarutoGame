import { Component } from "../../core/Component";

import "./Bar.css";

export class Bar extends Component {
  constructor({
<<<<<<< HEAD
    tagName = 'div',
=======
    tagName = "div",
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
