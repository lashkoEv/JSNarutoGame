import { User, UserController, UserRepository } from "./schemas";
import { Input } from "./components";
import { render } from "./core/render";
import { append } from "./core/append";

import "./style.css";
import { Button } from "./components/Button/Button";

const user = new User({ login: "q", password: "q" });
console.log(user);

const userRepository = new UserRepository();
console.log(userRepository);

const userController = new UserController();
console.log(userController);

const input = new Input({
  tagName: "input",
  className: "input",
  children: [],
});

const button = new Button({
  tagName: "button",
  className: "btn",
  textContent: "",
});

render(app, input);
append(app, button);
