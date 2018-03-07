import { ListUsers } from '../models/ListUsers';
import { User } from '../models/User';
import { UserView } from '../views/UserView';
import { UserService } from '../services/UserService';

class UserController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._listUsers = new ListUsers();

        this._usersView = new UserView($('#usersView'));
        this._usersView.update(this._listUsers);

        this._service = new UserService();
        this._init();
    }

    _init(){
        this._service.getUsersFromServer().then(( users ) => {
            this._listUsers.addArray(users);
            this._service.getUsersFromDB().then((usersDB) => {
                this._listUsers.addArray(usersDB);
                this._usersView.update(this._listUsers);
            })
        });
    }

    addUser(event, user){
        this._service.add(user).then(() => {
            this._listUsers.add(user);
            this._usersView.update(this._listUsers);
        })
        .catch(error => console.log(error));
    }
}

let userController = new UserController();

export function currentInstance() {
    return userController;
}