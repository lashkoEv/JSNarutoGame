import { User, UserController, UserRepository } from "./schemas";
import { Input } from "./components";
import { render } from "./core/render";
import { append } from "./core/append";
import { Button } from "./components/Button/Button";

<<<<<<< HEAD
console.log('dsadd');
=======
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
>>>>>>> 1837cb3ec3403663be3230a0287e4c58f8632207
