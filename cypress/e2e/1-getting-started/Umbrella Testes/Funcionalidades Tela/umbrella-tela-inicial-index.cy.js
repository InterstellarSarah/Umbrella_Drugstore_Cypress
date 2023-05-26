describe('Umbrella barra inicial', () => {
  beforeEach(() => {
      cy.viewport(1920, 1080)

      cy.visit('https://thankful-beach-068042610.2.azurestaticapps.net');
      
      //login no sistema
      cy.get('#email').type('matheus@gmail.com');
      cy.get('#senha').type('Matheus@123');
      cy.contains('button', 'LOGIN').click();

      cy.wait(3000);
  })

  it('Entrar no carrinho', () =>{
     //entrando no carrinho
    //cy.contains('span', 'carrinho').click(); -> ate o atual momento, span nao tem nome para declaracao
    cy.get('[href="#"] > .material-symbols-outlined').click();

  });

  it('Entrar em configuracao de usuario', () =>{
     //entrando na tela de configuracao
    //cy.contains('span', 'config_usuario').click(); -> ate o atual momento, span nao tem nome para declaracao
    cy.get('[href="/cliente/detalhes-usuario"] > .material-symbols-outlined').click();

  });

  
  it('Fazer logout', () =>{
    //cy.contains('span', 'logout').click(); -> ate o atual momento, span nao tem nome para declaracao
    cy.get('[href="/logout"] > .material-symbols-outlined').click();

  });

  it('Entrar na tela de usuarios sendo admin ou estoquista', () =>{
    //cy.contains('button', 'badge Usuarios').click();
    
    cy.get('[routerlink="backoffice/usuarios"]').click();
    cy.wait(3000);
  });
  
  it('Entrar na tela de produtos sendo admin ou estoquista', () =>{
    
    cy.contains('button', 'inventory Produtos').click();
    cy.wait(3000);

  });
})