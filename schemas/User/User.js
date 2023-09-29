export class User {
  #login;
  #password;
  #score;

  constructor({ login, password, score = 0 }) {
    login && (this.#login = login);
    password && (this.#password = password);
    score && (this.#score = score);
  }

  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }

  get password() {
    return this.#password;
  }

  set password(password) {
    this.#password = password;
  }

  get score() {
    return this.#score;
  }

  increaseScore(reward) {
    this.#score += reward;
  }
}
