import { View } from './View';
import { currentInstance } from '../controllers/UserController';
import { User } from '../models/User';
import { UsersValidation } from '../validators/UsersValidation';

export class UserView extends View {
    
    constructor(element) {
        
        super(element);
    }
    
    template(model) {

        return `
        <div class="user-form">
            <form>
                <div class="form-group">
                    <label for="name">NOME:</label>
                    <input id="name" type="text" class="form-control"/>        
                </div>

                <div class="form-group">
                    <label for="email">EMAIL:</label>
                    <input id="email" type="email" class="form-control"/>        
                </div>

                <div class="form-group">
                    <label for="phone">TELEFONE:</label>
                    <input id="phone" type="text" class="form-control"/>        
                </div>

                <div class="form-group">
                    <label for="cpf">CPF:</label>
                    <input id="cpf" type="text" class="form-control"/>        
                </div>
                
                <button id="submit">ADICIONAR</button>
            </form>
        </div>

        <div id="usersListView">
            <table class="userTable">
            
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CPF</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
            
                <tbody>
                    ${model.users.map(n => `
                        
                        <tr>
                            <td>${n.name}</td>
                            <td>${n.cpf}</td>
                            <td>${n.phone}</td>
                            <td>${n.email}</td>
                        </tr>
                        
                    `).join('')}                   
                </tbody>
                
            </table>
        </div>
        `;
    }

    update(model) {
        
        super.update(model);

        let $ = document.querySelector.bind(document);
        let _inputName = $('#name');
        let _inputEmail = $('#email');
        let _inputPhone = $('#phone');
        let _inputCpf = $('#cpf');

        $('#submit').addEventListener('click', function(event) {
            event.preventDefault();
            if(event.target.nodeName == 'BUTTON'){
                let user = new User(_inputName.value, _inputCpf.value, 
                    _inputPhone.value, _inputEmail.value);

                if(UsersValidation.validate(user, _inputName, 
                    _inputEmail, _inputPhone, _inputCpf) === true){
                        currentInstance().addUser(event.target, user);  
                }
                else{
                    console.log('Validation error!');
                }
            }  
        });
    }
    
}
