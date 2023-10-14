import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";
import { Description } from "../Description";
import { render } from "../../core/render";

import "./Menu.css";
import { Hero, Enemy } from "../../schemas";
import { Scene } from "../Scene";
import { getDescription, getGame } from "../../store";
import { changeBackground } from "../../utils";

export class Menu extends AdvancedComponent {
  constructor({ tagName, className, children, events, enemy, ...attrs }) {
    super({
      tagName: "div",
      className: "game-menu",
    });

    
    changeBackground("/bg/pixel bg 8.gif");

    const newGameBtn = new Button({
      className: "new-game-btn",
      textContent: "new game",
      events: {
        click: () => {
          getGame();
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
          getDescription();
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
    });

    const title = new AdvancedComponent({
      tagName: "div",
      className: "title",
      textContent: "Road To Hokage",
    });

    this.append(title, newGameBtn, loadGameBtn, descriptionBtn, exitBtn);
  }
}
