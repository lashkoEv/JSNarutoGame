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
    const isValid = this.#validate({ login, password });

    if (!(isValid.isValidLogin && isValid.isValidPassword)) return isValid;

    const user = this.#checkUser({ login, password });

    if (!user) {
      this.#userRepository.addUser({ login, password });

      this.#currentUser = this.#userRepository.getUser({ login, password });

      // go to game
    } else {
      alert("User Exists!");

      // change user`s data (login, pass)
    }

    return isValid;
  }

  // authorizes the user
  authorize({ login, password }) {
    const isValid = this.#validate({ login, password });

    if (!(isValid.isValidLogin && isValid.isValidPassword)) return isValid;

    const user = this.#checkUser({ login, password });

    if (user) {
      this.#currentUser = user;

      // go to game
    }

    console.log(this.#currentUser);

    return isValid;
  }

  #validate({ login, password }) {
    // место этого код валидации!!!
    // console.log(login);
    // console.log(password);
    // return console.log('hello');;

    return {
      isValidLogin: this.#validateLogin(login),
      isValidPassword: this.#validatePassword(password),
    };
  }

  #validateLogin(login) {
    return login === "q" ? true : false;
  }

  #validatePassword(password) {
    return password === "q" ? true : false;
  }
}
