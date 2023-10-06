import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";
<<<<<<< HEAD
import { Description } from  "../Description";
import { render } from "../../core/render";

import "./menu.css"
=======
import { Description } from "../Description";
import { render } from "../../core/render";

import "./Menu.css";
import { Hero } from "../../schemas/Hero/Hero";
import { Scene } from "../Scene";
>>>>>>> origin/dev

export class Menu extends AdvancedComponent {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({
      tagName: "div",
      className: "game-menu",
    });

    const newGameBtn = new Button({
<<<<<<< HEAD
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
=======
      className: "new-game-btn",
      textContent: "new game",
      events: {
        click: () => {
          const hero = new Hero();
          const scene = new Scene(hero);
          render(app, scene.scene);
        },
      },
    });

    const loadGameBtn = new Button({
      className: "load-game-btn",
      textContent: "load game",
    });

    const descriptionBtn = new Button({
      className: "description-btn",
      textContent: "description",
      events: {
        click: () => {
          const description = new Description({});
          render(app, description);
        },
      },
    });

    const exitBtn = new Button({
      className: "exit-btn",
      textContent: "exit",
      events: {
        click: () => {
          window.close();
        },
      },
>>>>>>> origin/dev
    });

    const title = new AdvancedComponent({
      tagName: "div",
      className: "title",
<<<<<<< HEAD
      textContent: 'Road To Hokage'
    });

    this.append(title, newGameBtn, loadGameBtn, desriptionBtn, exitBtn);
=======
      textContent: "Road To Hokage",
    });

    this.append(title, newGameBtn, loadGameBtn, descriptionBtn, exitBtn);
>>>>>>> origin/dev
  }
}

