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