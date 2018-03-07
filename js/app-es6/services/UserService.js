import { User } from '../models/User';
import { HttpService } from './HttpService';
import { ConnectionFactory } from './ConnectionFactory';
import { UserDao } from '../dao/UserDao';

export class UserService {
    
    constructor() {
        this._http = new HttpService();
    }

    getUsersFromServer() {    
        return this._http
            .get('https://private-21e8de-rafaellucio.apiary-mock.com/users')
            .then(users => {
                return users.map((object) => {
                    let user = new User(object.name, object.cpf, object.phone, object.email);
                    return user;
                });
            })
            .catch(error => {
                console.log(error);
                throw new Error(`Wasn't possible to get users.`);
        });  
    }

    getUsersFromDB() {

        return ConnectionFactory
                .getConnection()
                .then(connection => new UserDao(connection))
                .then(dao => dao.getAllUsers())
                .catch(error => {
                    console.log(error);
                    throw new Error('Error getting users')
        })
    }

    add(user){
        return ConnectionFactory
            .getConnection()
            .then(connection => new UserDao(connection))
            .then(dao => dao.add(user))
            .then(() => 'User added with sucess!')
            .catch(error => {
                console.log(error);
                throw new Error(`Wasn't possible to add users.`)
        });
    }

}