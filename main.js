import { User, UserController, UserRepository } from "./schemas";
import { Input } from "./components";
import { render } from "./core/render";
import { append } from "./core/append";
import { Button } from "./components/Button/Button";

import "./variables.css";
import "./style.css";
import { Form } from "./apps/Form/Form";

const form = new Form({
    isAuthorized: 'false',
})
// render(app, form)

// const user = new User({ login: "q", password: "q" });
// console.log(user);

// const userRepository = new UserRepository();
// console.log(userRepository);

const userController = new UserController();
// console.log(userController);

// userController.authorize({ login: "q", password: "q" });
// userController.register({ login: "q", password: "q" });
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

const button = document.getElementsByClassName('button')[0];

const formLogin = document.getElementsByClassName("input")[0];
const formPassword = document.getElementsByClassName("input")[1];
// console.log(formLogin);
// console.log(formPassword);

button.addEventListener('click', (e)=>{
    e.preventDefault();
    userController.authorize({
        login: formLogin.value, 
        password: formPassword.value
    });
});