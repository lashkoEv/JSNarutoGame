import { getAlert } from "../store"

export const showAlert = (isValidLogin, isValidPassword)=>{
    const alert = getAlert();

    console.log(alert);

    if(!isValidLogin){
        alert.children[0].children[1].style.display = 'block';
        alert.children[0].children[0].style.display = 'block';
    } else if(!isValidPassword){
        alert.children[0].children[3].style.display = 'block';
        alert.children[0].children[2].style.display = 'block';
    }
    
    if(!isValidLogin && !isValidPassword){
        alert.children[0].children[1].style.display = 'block';
        alert.children[0].children[0].style.display = 'block'; 
              
        alert.children[0].children[3].style.display = 'block';
        alert.children[0].children[2].style.display = 'block';
    }

    return alert;
}