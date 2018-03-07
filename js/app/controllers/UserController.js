class UserController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputPhone = $('#phone');
        this._inputCpf = $('#cpf');

        this._service = new UserService();
        this.init();
    }

    init(){
        this._service.getUsersFromServer().then(( users ) => {
            console.log(users);
        });
    }

    addUser(event){
        event.preventDefault();

        let user = new User(this._inputName.value, this._inputCpf.value, this._inputPhone.value, this._inputEmail.value);

        this._service.add(user).then(() => {
            this._service.getUsersFromDB().then((users) => {
                console.log(users);
            });
            //this._clearForm();
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