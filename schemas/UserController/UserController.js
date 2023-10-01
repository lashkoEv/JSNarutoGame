import { User, UserRepository } from "../";

export class UserController {
  #userRepository;
  #currentUser;

  constructor() {
    this.#userRepository = new UserRepository();
    this.#userRepository.loadUsers();

    this.#currentUser = false;
  }

  // takes an object like {login, password}
  // returns the found user or undefined
  #checkUser({ login, password }) {
    return this.#userRepository.getUser({ login, password });
  }

  // registers a new user
  register({ login, password }) {
    if(!this.validate({login, password})) return;

    const user = this.#checkUser({ login, password });

    if (!user) {
      this.#userRepository.addUser({ login, password });

      this.#currentUser = this.#userRepository.getUser({ login, password });
      
      // go to game

    } else {
      alert("User Exists!");

      // change user`s data (login, pass)
    }
  }

  // authorizes the user
  authorize({ login, password }) {
    const user = this.#checkUser({ login, password });

    if (user) {
      this.#currentUser = user;

      // go to game

    }

    console.log(this.#currentUser);
  }

  validate({ login, password }) {
    // место этого код валидации!!!
    return true;

    // const login = document.getElementsByClassName("input-login")[0].value;
    // const password = document.getElementsByClassName("input-login")[0].value;


  }


}
