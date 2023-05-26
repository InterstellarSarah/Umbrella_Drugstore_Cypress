describe('Umbrella Usuarios', () => {
    beforeEach(() => {
        cy.visit('https://thankful-beach-068042610.2.azurestaticapps.net');
        cy.viewport(1920, 1080)

        //login no sistema
        cy.get('#email').type('matheus@gmail.com');
        cy.get('#senha').type('Matheus@123');
        cy.contains('button', 'LOGIN').click();
  
        //aguardando carregamento
        cy.wait(3000);

        //entrando na tela de usuarios
        cy.get('[routerlink="backoffice/usuarios"]').click();
        cy.wait(1000);
    })
    
    it('Criar um novo usuario Admin valido', () =>{
        cy.contains('button', 'add').click();
        cy.get('#m-nome').click();
        cy.get('#m-nome').type('Luis Almeida');     
         
        cy.get('#m-cpf').click();
        cy.get('#m-cpf').type('123.456.789.90'); 
        
        cy.get('#m-email').click();
        cy.get('#m-email').type('luis01@gmail.com');

        cy.get('#m-senha').click();
        cy.get('#m-senha').type('123456');
        
        cy.get('#m-confimaSenha').click();
        cy.get('#m-confimaSenha').type('123456');

        cy.get('#m-cargo').select('Admin');

        cy.get('#btnSalvar').click();

    })

    it('Criar um novo usuario Estoquista valido', () =>{
        cy.contains('button', 'add').click();
        cy.get('#m-nome').click();
        cy.get('#m-nome').type('Osvaldo Lima');     
         
        cy.get('#m-cpf').click();
        cy.get('#m-cpf').type('910.678.345.12'); 
        
        cy.get('#m-email').click();
        cy.get('#m-email').type('oslima@gmail.com');

        cy.get('#m-senha').click();
        cy.get('#m-senha').type('123456');
        
        cy.get('#m-confimaSenha').click();
        cy.get('#m-confimaSenha').type('123456');

        cy.get('#m-cargo').select('Estoquista');

        cy.get('#btnSalvar').click();

    })

        //ainda nao foram criadas validacoes na tela

})