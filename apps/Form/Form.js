import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";

import "./Form.css";

export class Form extends AdvancedComponent {
  // returns new Auth|Reg Form
  constructor({ isAuthorized = false, tagName, className, children, events, html, ...attrs }) {
    super({
      tagName : 'form',
      className : 'form',
      children
    });

      this.append(
        new AdvancedComponent({
          tagName: 'div',
          className: 'title',
          textContent: 'Authorization'
        }),

        new Input({
          placeholder: 'Login',

          //placeholder will change in Auth|Reg
        }),
        
        new Input({
          placeholder: 'Password'
        }),

        new Button({
          textContent: 'Send',
          events : {
            click: (e) => {
              console.log('hey');
            }
          }
        }),

        new AdvancedComponent({
          tagName: 'a',
          className: 'link',
          textContent: "Don't have an account? Register!"
          //textContent will change in Auth|Reg
        })
      )
  }
}