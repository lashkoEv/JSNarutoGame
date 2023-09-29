import { User } from "../User/User";

export class UserRepository {
  #users;

  constructor({ users = [] }) {
    this.#users = users;
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
