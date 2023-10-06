import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";
import { Description } from  "../Description";
import { render } from "../../core/render";

import "./menu.css"

export class Menu extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "game-menu",
    });

    const newGameBtn = new Button({
      className: 'new-game-btn',
      textContent: "new game",
    });

    const loadGameBtn = new Button({
      className: 'load-game-btn',
      textContent: "load game",
    });

    const desriptionBtn = new Button({
      className: 'description-btn',
      textContent: "description",
      events: {
        click: ()=>{
          const description = new Description({});
          render(app,description)
        }
      }
    });
    
    const exitBtn = new Button({
      className: 'exit-btn',
      textContent: "exit",
    });

    const title = new AdvancedComponent({
      tagName: "div",
      className: "title",
      textContent: 'Road To Hokage'
    });

    this.append(title, newGameBtn, loadGameBtn, desriptionBtn, exitBtn);
  }
}

