import { User, UserRepository } from "../";
import { Menu } from "../../apps";
import { render } from "../../core/render";
import { getMenu } from "../../store";
import {
  lowerCaseSymbols,
  upperCaseSymbols,
  specialSymbols,
} from "../../utils";

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

      getMenu();
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

      getMenu();
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
    let isValidLogin = false;

    const symbolsBeforeAT = login.slice(0, login.indexOf("@"));

    if (
      symbolsBeforeAT.length > 0 &&
      login.includes(".") &&
      login.includes("@") &&
      !login.includes(" ")
    ) {
      isValidLogin = true;
    }

    console.log("isValidLogin", isValidLogin);

    return isValidLogin;
  }

  #validatePassword(password) {
    let isValidPass = false;

    if (password.length + 1 > 5 && password.length < 15) {
      let haveNum = false;

      //CHECK IF PASS CONTAINS SYMBOLS
      const haveSymbols = this.#checkAssignment(specialSymbols, password);

      //CHECK IF PASS CONTAINS UPPERCASE LETTERS
      const haveUpperCaseLetters = this.#checkAssignment(
        upperCaseSymbols,
        password
      );

      //CHECK IF PASS CONTAINS UPPERCASE LETTERS
      const haveLowerCaseLetters = this.#checkAssignment(
        lowerCaseSymbols,
        password
      );

      //CHECK IF PASS CONTAINS NUMS
      for (const passwordsChar of password) {
        if (!isNaN(+passwordsChar)) {
          haveNum = true;
        }
      }

      if (
        haveLowerCaseLetters &&
        haveUpperCaseLetters &&
        haveSymbols &&
        haveNum
      ) {
        isValidPass = true;
      }
    }

    console.log("isValidPass", isValidPass);

    return isValidPass;
  }

  #checkAssignment(arr, password) {
    return (
      arr.filter((symbol) => {
        if (password.includes(symbol)) {
          return symbol;
        }
      }).length > 0
    );
  }
}
