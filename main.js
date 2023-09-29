<<<<<<< HEAD
import './style.css'
import { Component} from "./core/Component";
import { render } from "./core/render";
import { defineEvent } from "./utils/defineEvent";
import { Button } from "./components/Button/Button";

const app = document.querySelector('#app');


render(btn,app)
=======
import { User, UserController, UserRepository } from "./schemas";
import { Input } from "./components";
import { render } from "./core/render";

import "./style.css";

const user = new User({ login: "q", password: "q" });
console.log(user);

const userRepository = new UserRepository();
console.log(userRepository);

const userController = new UserController();
console.log(userController);

const input = new Input({
    tagName : "input", 
    className : "input", 
    children : []
});

render(app, input);
>>>>>>> dev
