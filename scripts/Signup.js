"use strict";

class Signup {
constructor(){
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
        this.buttonInput = document.querySelector("#sigunup-button");
        this.messageWrapper = document.querySelector(".message-container");
    }

//Metodos para manejar la informacion que insertamos en los input

handleEmailInput = (event) => {
    const email = event.target.value;
}

handlePasswordInput = (event) => {
    const password = event.target.value;
}


handleRepeatPassword = (event) => {
    const repeatPassword = event.target.value;
}


saveData = (event) => {
//Este event previene que se recargue la pagina
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emamilInput.value;
    const password = this.passwordInput.value;

    // function createUser (name, email, password) {
    //    const userObj = {
    //        name: name,
    //        email: email,
    //        password: password
    //    } 
    //    return userObj;
    // }
    // const newUser = createUser(name, email, password);

    // console.log(newUser);
const newUser = new User(name, email, password);

//guardar usuario en la base de datos

db.saveNewUser( newUser );
console.log('newUser', newUser);

//database.createNewUser( newUser );

//Vaciar formulario
this.nameInput.value = '';
this.emailInput.value = '';
this.passwordInput.value = '';
this.repeatPasswordInput.value = '';
}

//Funciones para cada uno de los input

addListeners = {} => {

//Vincula lo que ocurre en los inputs

    this.emailInput.addEventListener('input', this.handleEmailInput);

    this.passwordInput.addEventListener'(input', this.handlePasswordInput);

    this.repeatPasswordInput.addEventListener('input', this.handlePasswordInput);



//enviara la informacion al formulario
    this.buttonInput.addEventListener('click', this.saveData);
}


}

const signup = new Signup();

window.addEventListener('load', signup.addListeners);

