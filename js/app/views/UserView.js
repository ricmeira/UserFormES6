class UserView extends View {
    
    constructor(elemento) {
        
        super(elemento);
    }
    
    template(model) {

        return `
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
                        <td>${n.email}</td>
                        <td>${n.phone}</td>
                        <td>${n.cpf}</td>
                    </tr>
                    
                `).join('')}                   
            </tbody>
            
        </table>
        `;
    }
}
