import { User } from '../models/User';

export class UserDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'users';
    }

    add(user) {
        return new Promise((resolve, reject) => {       
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(user);

            request.onsuccess = e => {
                resolve();
            };
            request.onerror = e => {
                console.log(e.target.error);
                reject("Error on adding user");
            };

        });
    }

    getAllUsers() {

        return new Promise((resolve, reject) => {

            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let users = [];

            cursor.onsuccess = e => {

                let actual = e.target.result;

                if(actual) {

                    let data = actual.value;

                    users.push(new User(data.name, data.cpf, data.phone, data.email));

                    actual.continue();

                } else {

                    resolve(users);
                }

            };

            cursor.onerror = e => {

                console.log(e.target.error);
                reject('Error listing users');
            };

        });
    }
}