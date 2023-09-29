import { User } from "../";

export class UserRepository {
  #users;

  constructor() {
    this.#users = [];
  }

  // takes an object like {login, password}
  // returns a found user or false
  getUser({ login, password }) {}

  // takes an object like {login, password}
  // returns the newly created user.
  addUser({ login, password }) {}

  // loads users from local storage
  loadUsers() {}

  // saves users to local storage
  saveUsers() {}
}
