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
        });

        const alert = new AdvancedComponent({
            tagName: 'div',
            className: 'alert'
        });

        const loginTitle = new AdvancedComponent({
            tagName: 'div',
            className: 'title-wrapper',
            textContent: 'Login:',
        });

        const loginErrors = new AdvancedComponent({
            tagName: 'div',
            className: 'login-errors',
            textContent: 'Ur login isnt correct. Example: q@q.q'
        });

        const passwordTitle = new AdvancedComponent({
            tagName: 'div',
            className: 'title-wrapper',
            textContent: 'Password:',
        });

        const passwordErrors = new AdvancedComponent({
            tagName: 'div',
            className: 'password-errors',
            textContent: 'Ur pass isnt correct, he should contain min 5 symbols and another features. Example: Qq12@'
        })

        const alertBtnWrapper = new AdvancedComponent({
            tagName: 'div',
            className: 'alert-btn-wrapper',
            children: [
                new Button({
                    textContent: 'OK',
                    className: 'alert-btn',
                    events: {
                        click: (e)=>{
                            this.remove(alert);
                        }
                    }
                })
            ]
        })

        // const alertBtn = new Button({
        //     textContent: 'OK',
        //     className: 'alert-btn',
        //     events: {
        //         click: (e)=>{
        //             this.remove(alert);
        //         }
        //     }
        // })

        alert.append(loginTitle, loginErrors, passwordTitle, passwordErrors, alertBtnWrapper);

        return this.append(alert);
    }
}