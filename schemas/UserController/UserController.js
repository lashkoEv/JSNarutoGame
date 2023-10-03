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
    if(!this.validate({login, password})) return false;

    const user = this.#checkUser({ login, password });

    if (!user) {
      this.#userRepository.addUser({ login, password });

      this.#currentUser = this.#userRepository.getUser({ login, password });

      // go to game

    } else {
      alert("User Exists!");

      // change user`s data (login, pass)
      return true;
    }
  }

  // authorizes the user
  authorize({ login, password }) {
    if(!this.validate({login, password})) return false;

    const user = this.#checkUser({ login, password });

    if (user) {
      this.#currentUser = user;

      // go to game

    }

    console.log(this.#currentUser);
    return true;
  }

  validate({ login, password }) {
    // место этого код валидации!!!
    const symbolsBeforeAT = login.slice(0,login.indexOf('@'));
    //check if email has spaces
  }
}