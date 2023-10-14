import { getAlert } from "../store"

export const showAlertWithLoginError = ()=>{
    const alert = getAlert();
    alert.children[0].children[0].textContent = 'Ur login isnt correct. Example: q@q.q';
    return alert;
}

export const showAlertWithPassError = ()=>{
    const alert = getAlert();
    alert.children[0].children[1].textContent = 'Ur pass isnt correct, he should contain min 5 symbols and another features. Example: Qq12@';
    return alert;
}