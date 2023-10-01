import { AdvancedComponent } from "../../core/Component";
import { Input, Button } from "../../components";

export class Form extends AdvancedComponent {
  // returns new Auth|Reg Form
  constructor({ isAuthorized, tagName, className, children, events, html, ...attrs }) {
    super({
      tagName : 'form',
      className : 'form',
      children,
      events,
      html,
      ...attrs});

      this.id = 'form';
      console.log(this);
  }
}