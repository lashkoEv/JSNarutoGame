import { userController } from "./store";
import { User, UserController, UserRepository } from "./schemas";
import { ImageButton, Input } from "./components";
import { render } from "./core/render";
import { append } from "./core/append";
import { Button } from "./components/Button/Button";
import { Form } from "./apps/Form/Form";
<<<<<<< HEAD
import { userController } from "./store";
import { Menu } from "./apps/Menu/Menu";
=======
import { Bar } from "./components/Bar/Bar";
import { Menu, Scene } from "./apps";
>>>>>>> origin/dev

import "./variables.css";
import "./style.css";
import { Hero } from "./schemas/Hero/Hero";

// const bar = new Bar({});
// render(app, bar);


const form = new Form({
  isRegistration: true,
});
render(app, form);

<<<<<<< HEAD
// const gameMenu = new Menu({});
// render(app, gameMenu);

=======
// const hero = new Hero();
// const scene = new Scene(hero);
// render(app, scene.scene);

// const gameMenu = new Menu({});
// render(app, gameMenu);

// const imgbtn = new ImageButton({ src: "/score/score.png" });
// render(app, imgbtn);

>>>>>>> origin/dev
// const user = new User({ login: "q", password: "q" });
// console.log(user);

// const userRepository = new UserRepository();
// console.log(userRepository);

// userController.register({ login: "q", password: "q" });
// console.log(userController);

// userController.authorize({ login: "q", password: "q" });
// userController.authorize({ login: "q", password: "q" });

// const input = new Input({
//   className: "",
//   children: [],
//   placeholder: "Login",
// });

// const button = new Button({
//   className: "btn",
//   textContent: "Send",
// });

// render(app, input);
// append(app, button);

