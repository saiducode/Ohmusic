// "use strict";

// class Signup {
// constructor(){
//         this.nameInput = document.querySelector("#name");
//         this.emailInput = document.querySelector("#email");
//         this.passwordInput = document.querySelector("#password");
//         this.repeatPasswordInput = document.querySelector("#repeat-password");
//         this.buttonInput = document.querySelector("#signup-button");
//         this.messageWrapper = document.querySelector(".message-container");
//     }

// //Metodos para manejar la informacion que insertamos en los input

// handleEmailInput = (event) => {
//     const email = event.target.value;
    
//     validator.validateValidEmail(email);

//     const errorsObj = validator.getErrors();

//     if(!errorsObj.invalidEmailError){
        
//         validator.validateUniqueEmail(email)
//     }

// this.setErrorMessages();

// }



// handlePasswordInput = (event) => {
//     const password = event.target.value;

//     const repeatedPassword = this.repeatPasswordInput.value;

//     validator.validatePassword(password);
//     validator.validatePasswordRepeat(password, repeatedPassword);

//     this.setErrorMessages();


// }


// handleRepeatPassword = (event) => {
//     const repeatedPassword = event.target.value;

//     const password = this.passwordInput.value;

//     validator.validatePasswordRepeat(password, repeatedPassword);

//     validator.validatePassword(password)

// this.setErrorMessages();

// }




// saveData = (event) => {
// //Este event previene que se recargue la pagina
//     event.preventDefault();

//     const name = this.nameInput.value;
//     const email = this.emailInput.value;
//     const password = this.passwordInput.value;

//     // function createUser (name, email, password) {
//     //    const userObj = {
//     //        name: name,
//     //        email: email,
//     //        password: password
//     //    } 
//     //    return userObj;
//     // }
//     // const newUser = createUser(name, email, password);

//     // console.log(newUser);
// const newUser = new User(name, email, password);

// //guardar usuario en la base de datos

// db.saveNewUser( newUser );
// console.log('newUser', newUser);

// //database.createNewUser( newUser );

// //Vaciar formulario
// this.nameInput.value = '';
// this.emailInput.value = '';
// this.passwordInput.value = '';
// this.repeatPasswordInput.value = '';


// validator.resetValidator();

// }

// //Funciones para cada uno de los input

// addListeners = () => {

// //Vincula lo que ocurre en los inputs

//     this.emailInput.addEventListener('input', this.handleEmailInput);

//     this.passwordInput.addEventListener('input', this.handlePasswordInput);

//     this.repeatPasswordInput.addEventListener('input', this.handlePasswordInput);



// //enviara la informacion al formulario
//     this.buttonInput.addEventListener('click', this.saveData);
// }

// setErrorMessages = () => {
//     this.messageWrapper.innerHTML = "";

//     const errorObj = validator.getErrors();

//     const errorStringArr = Object.values(errorObj);

//     errorStringArr.forEach( (errorStr) => {
//         const errorMessageP = document.createElement("p");
//         errorMessageP.innerHTML = errorStr;
//         this.messageWrapper.appendChild(errorMessageP);
        
//     });
// }

// }

// const signup = new Signup();

// window.addEventListener('load', signup.addListeners);

"use strict";
class Signup {
constructor(){
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");
    this.buttonInput = document.querySelector("#signup-button");
    this.messageWrapper = document.querySelector(".message-container");
}
//Métodos para manejar la información que insertamos en los input
handleEmailInput = (event) => {
    const email = event.target.value;
    validator.validateValidEmail(email);
    const errorsObj = validator.getErrors();
    if(!errorsObj.invalidEmailError){
        validator.validateUniqueEmail(email)
    }
this.setErrorMessages();
this.checkButton();
}
handlePasswordInput = (event) => {
    const password = event.target.value;
const repeatedPassword = this.repeatPasswordInput.value;
validator.validatePassword(password);
validator.validatePasswordRepeat(password, repeatedPassword);
this.setErrorMessages();
this.checkButton();
}
handleRepeatPasswordInput = (event) => {
    const repeatedPassword = event.target.value;
    const password = this.passwordInput.value;
    validator.validatePasswordRepeat(password, repeatedPassword);
    validator.validatePassword(password)
this.setErrorMessages();
this.checkButton();
}
saveData = (event) => {
//Este método de event previene el comportamiento por default y no permite cargar a la página
    event.preventDefault();
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    // function createUser (name, pokemon, type, email, password) {
    //     const userObj = {
    //         name: name,
    //         pokemon: pokemon,
    //         type: type,
    //         email: email,
    //         password: password
    //     }
    //     return userObj;
    // }
    // const newUser = createUser(name, pokemon, type, email, password);
const newUser = new User(name, email, password);
//guardar el usuario en la base de datos
db.saveNewUser( newUser );
//Vaciar formulario
this.nameInput.value = '';
this.emailInput.value = '';
this.passwordInput.value = '';
this.repeatPasswordInput.value = '';
this.showSuccessMessage();
this.removeMessages();
validator.resetValidator();
this.buttonInput.disabled = true;
}
//Métodos para cada uno de los input
addListeners = () => {
//Vincula lo que ocurre en el input
    this.emailInput.addEventListener('input', this.handleEmailInput);
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
    this.buttonInput.addEventListener('click', this.saveData);
}
setErrorMessages = () => {
    this.messageWrapper.innerHTML = "";
    const errorObj = validator.getErrors();
    const errorStringArr = Object.values(errorObj);
    errorStringArr.forEach( (errorStr) => {
        const errorMessageP = document.createElement("p");
        errorMessageP.innerHTML = errorStr;
        this.messageWrapper.appendChild(errorMessageP);
    });
}
checkButton = () => {
    const errorsObj = validator.getErrors();
    const errorsArr = Object.values(errorsObj);
    if(errorsArr.length > 0){
        this.buttonInput.disabled = true;
    } else {
        this.buttonInput.disabled = false;
    }
}
removeMessages = () => {
    setTimeout(() => {
        this.messageWrapper.innerHTML = '';
    }, 2000)
}
showSuccessMessage = () => {
this.messageWrapper.innerHTML = '';
const errorsObj = validator.getErrors();
const errorsStringArr = Object.values(errorsObj);
if(errorsStringArr.length > 0) {
    return;
}
const successMessageP = document.createElement('p');
successMessageP.innerHTML = "La cuenta ha sido creada con éxito.";
this.messageWrapper.appendChild(successMessageP);
}
}
const signup = new Signup();
//Cuando termine de cargar, registra todos los eventos
window.addEventListener('load', signup.addListeners);