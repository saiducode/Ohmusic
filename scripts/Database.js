"use strict";

class Database {

    getAllUsers () {
        
        const userStr = localStorage.getItem('users');
        const userArr = JSON.parse(usersStr);

        if(userArr === null) {
            return [];

        } else {
            return usersArr;
        }
    }

    saveNewUser (newUser) {
        const usersArr = this.getAllUsers();
     console.log(usersArr,'usersArr');
        usersArr.push(newUser);

        const userStr = JSON.stringify(usersArr);

        localStorage.setItem('users', usersStr);

    }

}

const db = new Database();

