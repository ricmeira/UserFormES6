export class ListUsers {

    constructor() {
        this._users = [];
    }

    add(user) { 
        this._users.push(user);
    }

    addArray(userAray){
       this._users = this._users.concat(userAray);  
    }

    get users() {
        return [].concat(this._users);
    }

    clean() {   
        this._users = [];
    }  
}