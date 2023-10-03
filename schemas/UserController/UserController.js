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

  #checkUserLogin(login) {
    return this.#userRepository.getUserByLogin(login);
  }

  // registers a new user
  register({ login, password }) {
    const isValid = this.#validate({ login, password });

    if (!(isValid.isValidLogin && isValid.isValidPassword)) return isValid;

    const user = this.#checkUserLogin(login);

    if (!user) {
      this.#userRepository.addUser({ login, password });

      this.#currentUser = this.#userRepository.getUser({ login, password });

      console.log(this.#userRepository);
      console.log(this.#currentUser);

      // go to game menu
    } else {
      alert("User Exists!");

      isValid.isValidLogin = false;
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
    } else {
      alert("No user with such data was found!");

      isValid.isValidLogin = false;
      isValid.isValidPassword = false;
    }

    console.log(this.#userRepository);
    console.log(this.#currentUser);

    return isValid;
  }

  #validate({ login, password }) {
    return {
      isValidLogin: this.#validateLogin(login),
      isValidPassword: this.#validatePassword(password),
    };
  }

  #validateLogin(login) {
    return true;
  }

  #validatePassword(password) {
    return true;
  }
}
