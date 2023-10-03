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
    let isValidLogin = false;
    let isValidPass = false;
    const keyboardsSymbols = ['!','@','#','$','%','^','&','*'];
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const symbolsBeforeAT = login.slice(0,login.indexOf('@'));
    
    if(symbolsBeforeAT.length > 0 && login.includes('.') && login.includes('@') && !login.includes(' ')){      
      isValidLogin = true; 
    }
    
    console.log(isValidLogin);

    if(password.length + 1 > 5 && password.length < 15){
      let haveNum = false;

      //CHECK IF PASS CONTAINS SYMBOLS
      const haveSymbols = this.#checkAssignment(keyboardsSymbols, password)

      //CHECK IF PASS CONTAINS UPPERCASE LETTERS
      const haveUpperCaseLetters = this.#checkAssignment(upperCase, password)

      //CHECK IF PASS CONTAINS UPPERCASE LETTERS
      const haveLowerCaseLetters = this.#checkAssignment(lowerCase, password)

      //CHECK IF PASS CONTAINS NUMS
      for(const passwordsChar of password){        
        if(!isNaN(+passwordsChar)){
          haveNum = true;
        }
      }
      
      if(haveLowerCaseLetters && haveUpperCaseLetters && haveSymbols && haveNum){
        isValidPass = true;
      }

      console.log(isValidPass);
    }
  }

  #checkAssignment(arr, password){
   return arr.filter((symbol)=>{
      if(password.includes(symbol)){
        return symbol;
      }
    }).length > 0;
  }
}