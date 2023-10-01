import { User } from "../";

export class UserRepository {
  #users;

  constructor() {
    this.#users = [];
  }

  // takes an object like {login, password}
  // returns a found user or undefined
  getUser({ login, password }) {
    return this.#users.find((user) => {
      if (user.login === login && user.password === password) return user;
    });
  }

  // takes an object like {login, password}
  // returns the newly created user.
  addUser({ login, password }) {
    this.#users.push(new User({ login, password }));

    return this.#users[this.#users.length - 1];
  }

  // loads users from local storage
  loadUsers() {}

  // saves users to local storage
  saveUsers() {}
}
