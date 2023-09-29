import { User, UserRepository } from "../";

export class UserController {
  #userRepository;

  constructor() {
    this.#userRepository = new UserRepository();
    this.#userRepository.loadUsers();
  }

  // takes an object like {login, password}
  // returns the found user or false
  #checkUser({ login, password }) {}

  // registers a new user
  register({ login, password }) {}

  // authorizes the user
  authorize({ login, password }) {}
}
