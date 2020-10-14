"user strict";

class Validator {
    constructor(){
        this.invalidEmailError = "Introduce un email válido";
        this.emailExistsError = "Este email ya está registrado";
        this.passwordError = "Introduce una contraseña de 6 o más caracteres";
        this.repeatPassswordError = "Los campos no coinciden";

        this.errors = {
            invalidEmailError : this.invalidEmailError,
            passwordError : this.passwordError,
            repeatPassswordError : this.repeatPassswordError
        }

    }

    validateValidEmail = (email) => {}
        if (this.emailIsValid(email)){
            delete this.errors.invalidEmailError;
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
        }



    emailIsValid = (email) => {
        const emailRegEx = 
    }

    validateUniqueEmail = (newEmail) {}

    validatePassword = (password) => {}

    validatePasswordRepeat = (password, passwordRepeat) => {}

    getErrors = () => {}

    resetValidator = () => {}






}


const validator = new Validator();
