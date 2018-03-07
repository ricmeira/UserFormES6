export class UsersValidation{

    static validate(user, inputName, inputEmail, inputPhone, inputCpf){
        let validations = { name: this._validateName(user.name), email: this._validateEmail(user.email),
              cpf: this._validateCPF(user.cpf), phone: this._validatePhone(user.phone)};

        return this._showErrors(validations, inputName, inputEmail, inputPhone, inputCpf);
    }

    static _validateName(name){
        if(name.length < 6){
            return false;
        }
        return true;
    }

    static _validateEmail(email){
        if(email.length < 6){
            return false;
        }
        return true;
    }

    static _validateCPF(cpf){
        //Checks if it only contains numbers
        if(cpf.length < 11 || !/^\d+$/.test(cpf)){
            return false;
        }
        return true;
    }

    static _validatePhone(phone){
        //Checks if it only contains numbers
        if(phone.length < 8 || !/^\d+$/.test(phone)){
            return false;
        }
        return true;
    }

    static _showErrors(fields, inputName, inputEmail, inputPhone, inputCpf){
        this._resetErrors(inputName, inputEmail, inputPhone, inputCpf);

        let isValid = true;
        if(!fields.name){
            inputName.setCustomValidity("Invalid field.");
            isValid = false;
        }
        if(!fields.email){
            inputEmail.setCustomValidity("Invalid field.");
            isValid = false;
        }
        if(!fields.phone){
            inputPhone.setCustomValidity("Invalid field.");
            isValid = false;
        }
        if(!fields.cpf){
            inputCpf.setCustomValidity("Invalid field.");
            isValid = false;
        }

        return isValid;
    }

    static _resetErrors(inputName, inputEmail, inputPhone, inputCpf){
        inputName.setCustomValidity("");
        inputEmail.setCustomValidity("");
        inputPhone.setCustomValidity("");
        inputCpf.setCustomValidity("");
    }

}