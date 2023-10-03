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

          if (!isValid.isValidLogin) {
            loginInput.classList.add("input-error");
          } else {
            loginInput.classList.remove("input-error");
          }

          if (!isValid.isValidPassword) {
            passwordInput.classList.add("input-error");
          } else {
            passwordInput.classList.remove("input-error");
          }
        },
      },
      // will change in Auth|Reg
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
  }
}
