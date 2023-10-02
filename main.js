import { User, UserController, UserRepository } from "./schemas";
import { Input } from "./components";
import { render } from "./core/render";
import { append } from "./core/append";
import { Button } from "./components/Button/Button";
import { Form } from "./apps/Form/Form";

import "./variables.css";
import "./style.css";

const user = new User({ login: "q", password: "q" });
console.log(user);

const userRepository = new UserRepository();
console.log(userRepository);

const userController = new UserController();
console.log(userController);

userController.authorize({ login: "q", password: "q" });
userController.register({ login: "q", password: "q" });
userController.authorize({ login: "q", password: "q" });

const input = new Input({
  className: "",
  children: [],
  placeholder: "Login",
});

const button = new Button({
  className: "btn",
  textContent: "Send",
});

render(app, input);
append(app, button);

const form = new 