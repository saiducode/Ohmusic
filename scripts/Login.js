// "use strict";

// class Login {
//     constructor() {
        
//         this.emailInput = document.querySelector("#email");
//         this.passwordInput = document.querySelector("#password");
//         this.loginButton = document.querySelector("#login-button");
//         this.messageContainer = document.querySelector(".message-container");
//     }

//         submit = (event) => {
//             event.preventDefault();

//             const usersDB = db.getAllUsers();

//             const email = this.emailInput.Value;
//             const password = this.passwordInput.Value;

//             const user = usersDB.find((userO => {
//                 if(userO.email === email && userO.password === password) {
//                     return true;
//                 }

                
//             })
//             this.showMessage(user);
//         }


//     showMessage = (user) => {
//         this.messageContainer.innerHTML = '';

//         const message = document.createElement('p');

//         if(user){
//             message.classList.add("correct-message");
//             message.innerHTML = `Hola, ${user.email}`;

//         } else {
//             message.innerHTML = "El email y/o password es incorrecto";
//         }

//         this.messageContainer.appendChild(message);    

//     }
// }


// const login = new Login();

// login.loginButton.addEventListener('click', login.submit);

"use strict";
class Login {
constructor(){
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.loginButton = document.querySelector("#login-button");
    this.messageContainer = document.querySelector(".message-container");
}
    submit = (event) => {
        event.preventDefault();
        const usersDB = db.getAllUsers();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const user = usersDB.find( user0 => {
            if(user0.email === email && user0.password === password) {
                return true;
            }
        })
        this.showMessage(user);
    }
    showMessage = (user) => {
        this.messageContainer.innerHTML = '';
        const message = document.createElement('p');
        if(user){
            message.classList.add("correct-message");
            message.innerHTML = `Hola, ${user.email}`;
        } else {
            message.innerHTML ="El email y/o password es incorrecto";
        }
        this.messageContainer.appendChild(message);
        if(user) this.redirect();
    }
    redirect = () => {
        setTimeout (() => location.assign('../discover.html'), 2000)
    }
}
const login = new Login();
