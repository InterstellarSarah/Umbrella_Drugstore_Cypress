describe('Umbrella Login de usuario', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://thankful-beach-068042610.2.azurestaticapps.net');
        
    })
  
    it('Validar alert ao clicar em login sem preencher os campos', () =>{
        cy.contains('button', 'LOGIN').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Usuario ou senha incorretos');
        })
    })

    it('Validar alert ao clicar em login sem preencher os campos', () =>{
        cy.get('#email').type('123!!!!');
        cy.get('#senha').type('123**&');
        cy.contains('button', 'LOGIN').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Usuario ou senha incorretos');
        })
    });

  })