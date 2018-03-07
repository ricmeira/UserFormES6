class UserController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputPhone = $('#phone');
        this._inputCpf = $('#cpf');
        this._usersView = new UserView($('#usersListView'));

        this._listUsers = new ListUsers();

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

    addUser(event){
        event.preventDefault();

        let user = new User(this._inputName.value, this._inputCpf.value, this._inputPhone.value, this._inputEmail.value);

        this._service.add(user).then(() => {
            this._listUsers.add(user);
            this._usersView.update(this._listUsers);
            this._clearForm();
        })
        .catch(error => console.log(error));
    }

    _clearForm() {
        this._inputName.value = '';
        this._inputEmail.value = '';
        this._inputPhone.value ='';
        this._inputCpf.value = '';
    }

}