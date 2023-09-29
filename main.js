import { User, UserController, UserRepository } from './schemas'

import './style.css'

const user = new User({login:"", password:""});
console.log(user);

const userRepository = new UserRepository();
console.log(userRepository);

const userController = new UserController();
console.log(userController);