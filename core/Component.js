<<<<<<< HEAD
import { render } from "./render";

export class Component{
    constructor({
        tagName,
        id,
        textContent,
        className,
        children,
        events,
        placeholder
    })

    {
        if(tagName) this.tagName = tagName;
        if(id) this.id = id;
        if(textContent) this.textContent = textContent;
        if(className) this.className = className;
        if(children) this.children = children;
        if(events) this.events = events;
        if(placeholder) this.placeholder = placeholder;
    }

    toHtml(){
        this.element = document.createElement(this.tagName);
        if(this.className) this.element.className = this.className;
        if(this.id) this.element.id = this.id;
        if(this.textContent) this.element.textContent = this.textContent;
        if(this.placeholder) this.element.placeholder = this.placeholder;

        if(this.children){
            for(const child of this.children){
                render(child, this.element);
            }
        }

        return this.element;
    }
}
=======
import { isArray, isExisting } from "../utils";

export class Component {
  constructor({ tagName = "div", className, children }) {
    const element = document.createElement(tagName);
    className && (element.className = className);

    if (!children || isArray(children)) return element;

    for (const child of children) {
      element.append(child);
    }

    return element;
  }
}

export class AdvancedComponent extends Component {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children });

    if (isExisting(attrs)) {
      for (const attr in attrs) {
        this[attr] = attrs[attr];
      }
    }

    isExisting(html) && this.insertAdjacentHTML(html.position, html.text);

    if (!isExisting(events)) return this;

    for (const event in events) {
      this.addEventListener(event.type, event.action);
    }
  }
}
>>>>>>> dev
