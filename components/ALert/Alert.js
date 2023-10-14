import { AdvancedComponent } from "../../core/Component";
import { append } from "../../core/append";
import { getForm } from "../../store";
import { Button } from "../Button";

import './Alert.css'

export class Alert extends AdvancedComponent{
    constructor({
        tagName,
        classname,
        children,
    }){
        super({
            tagName: 'div', 
            className: 'alert-wrapper', 
            children
        });

        const alert = new AdvancedComponent({
            tagName: 'div',
            className: 'alert'
        });

        const loginTitle = new AdvancedComponent({
            tagName: 'div',
            className: 'title-wrapper',
            textContent: 'Login:',
            children:[
                new AdvancedComponent({
                    tagName: 'div',
                    className: 'login-errors'
                })
            ]
        });

        const passwordTitle = new AdvancedComponent({
            tagName: 'div',
            className: 'title-wrapper',
            textContent: 'Password:',
            children:[
                new AdvancedComponent({
                    tagName: 'div',
                    className: 'password-errors'
                })
            ]
        });

        const alertBtn = new Button({
            textContent: 'OK',
            events: {
                click: (e)=>{
                    getForm();
                }
            }
        })

        alert.append(loginTitle, passwordTitle, alertBtn)

        return this.append(alert);
    }
}