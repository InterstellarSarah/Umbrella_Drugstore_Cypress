describe('Umbrella Produtos', () => {
    beforeEach(() => {
        cy.visit('https://thankful-beach-068042610.2.azurestaticapps.net');
        cy.viewport(1920, 1080)

        //login no sistema
        cy.get('#email').type('matheus@gmail.com');
        cy.get('#senha').type('Matheus@123');
        cy.contains('button', 'LOGIN').click();
  
        //aguardando carregamento
        cy.wait(3000);

        //entrando na tela de estoques/produto
        cy.contains('button', 'inventory Produtos').click();
        cy.wait(1000);
    })
    
    it('Criar um novo produto valido', () =>{
        cy.contains('button', 'add').click();
        cy.get('[formcontrolname="name"]').click();
        cy.get('[formcontrolname="name"]').type('G-VIRUS');


        cy.get('select.ng-untouched').select('2');
         
        cy.get('#m-descricaoProduto').click();
        cy.get('#m-descricaoProduto').type('Vacina'); 
        
        cy.get('#m-precoProduto').click();
        cy.get('#m-precoProduto').type('100.000');

        cy.get('#m-quantidadeProduto').click();
        cy.get('#m-quantidadeProduto').type('5');

        cy.get('#btnSalvar').click();

    })

    it('Cancelar a criacao de um novo produto', () =>{
        cy.contains('button', 'add').click();
        cy.get('[formcontrolname="name"]').click();
        cy.get('[formcontrolname="name"]').type('G-VIRUS');


        cy.get('select.ng-untouched').select('2');
         
        cy.get('#m-descricaoProduto').click();
        cy.get('#m-descricaoProduto').type('Vacina'); 
        
        cy.get('#m-precoProduto').click();
        cy.get('#m-precoProduto').type('100.000');

        cy.get('#m-quantidadeProduto').click();
        cy.get('#m-quantidadeProduto').type('5');

        cy.get('.cancelar').click();

    })

    it('Modificar flag de produto existente', () =>{
        cy.get('#situacao-6ecb7f3d-5122-4201-311a-08db5cbc2a0b').click();

        cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(true)
        })

    })

    it('Entrar em visualizacao de produto existente', () =>{
        cy.contains('button', 'visibility').click();
    })

    it('Modificacao de produto existente', () =>{
        cy.contains('button', 'edit').click();
        cy.get('[formcontrolname="name"]').click();
        cy.get('[formcontrolname="name"]').clear();
        cy.get('[formcontrolname="name"]').type('G-VIRUS');


        cy.get('select.ng-untouched').select('2');
         
        cy.get('#m-descricaoProduto').click();
        cy.get('#m-descricaoProduto').clear();
        cy.get('#m-descricaoProduto').type('Vacina'); 
        
        cy.get('#m-precoProduto').click();
        cy.get('#m-precoProduto').clear();
        cy.get('#m-precoProduto').type('100.000');

        cy.get('#m-quantidadeProduto').click();
        cy.get('#m-quantidadeProduto').clear();
        cy.get('#m-quantidadeProduto').type('50');

        cy.get('#btnSalvar').click();
    })
    

})