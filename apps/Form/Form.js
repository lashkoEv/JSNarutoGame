import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";
import { userController } from "../../store";
import { render } from "../../core/render";

import "./form.css";

// returns new Auth|Reg Form
export class Form extends AdvancedComponent {
  constructor({
    isRegistration = false,
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
    });

    const loginInput = new Input({
      placeholder: "Login",
    });

    const passwordInput = new Input({
      placeholder: "Password",
    });

    const button = new Button({
      textContent: "Send",
      events: {
        click: (e) => {
          e.preventDefault();

          let isValid;

          const userData = {
            login: loginInput.value,
            password: passwordInput.value,
          };

          if (isRegistration) {
            isValid = userController.register(userData);
          } else {
            isValid = userController.authorize(userData);
          }

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
    });

    const title = new AdvancedComponent({
      tagName: "div",
      className: "title",
      textContent: isRegistration ? "Registration" : "Authorization",
    });

    const linkForAnotherForm = new AdvancedComponent({
      tagName: "a",
      className: "link",
      textContent: isRegistration
        ? "Already have an account? Log in!"
        : "Don't have an account? Register!",
      events: {
        click: () => {
          const form = new Form({
            isRegistration: !isRegistration,
          });
          render(app, form);
        },
      },
    });

    this.append(title, loginInput, passwordInput, button, linkForAnotherForm);
  }
}
