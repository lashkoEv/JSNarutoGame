import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";
import { userController } from "../../store";

import "./form.css";

export class Form extends AdvancedComponent {
  // returns new Auth|Reg Form
  constructor({
    isAuthorized = false,
    tagName,
    className,
    children,
    events,
    html,
    ...attrs
  }) {
    super({
      tagName: "form",
      className: "form",
      children,
    });

<<<<<<< HEAD
=======
    const loginInput = new Input({
      placeholder: "Login",
      //placeholder will change in Auth|Reg
    });

    const passwordInput = new Input({
      placeholder: "Password",
    });

    const button = new Button({
      textContent: "Send",
      events: {
        click: (e) => {
          e.preventDefault();
          const isValid = userController.authorize({
            login: loginInput.value,
            password: passwordInput.value,
          });

          if(!isValid){
            loginInput.classList.add('input-error'); 
          } else{
            loginInput.classList.remove('input-error'); 
          }
        },
      },
    });

    this.append(
      new AdvancedComponent({
        tagName: "div",
        className: "title",
        textContent: "Authorization",
        //textContent will change in Auth|Reg
      }),

      loginInput,
      passwordInput,
      button,

      new AdvancedComponent({
        tagName: "a",
        className: "link",
        textContent: "Don't have an account? Register!",
        //textContent will change in Auth|Reg
      })
    );
>>>>>>> 526dc12d8892dd13b0dc6b42bc6355bca2cd7f6d
  }
}