"use strict";

class Database {

    getAllUsers () {
        
        const userStr = localStorage.getItem('users');
        const userArr = JSON.parse(userStr);

        if(userArr === null) {
            return [];

        } else {
            return userArr;
        }
    }

    saveNewUser (newUser) {
        const userArr = this.getAllUsers();
     console.log(userArr,'userArr');
        userArr.push(newUser);

        const userStr = JSON.stringify(userArr);

        localStorage.setItem('users', userStr);

    }

}

const db = new Database();

