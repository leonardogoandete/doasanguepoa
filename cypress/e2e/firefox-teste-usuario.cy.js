// describe('template spec', () => {
//   /* ==== Test Created with Cypress Studio ==== */
//   it('teste-firefox', function () {
//     /* ==== Generated with Cypress Studio ==== */
//     // Mockando a resposta da API de login usando cy.fixture
//     cy.fixture('loginResponseUsuario.json').then((loginResponse) => {
//       // Interceptação para a chamada POST /auth/login
//       cy.intercept({
//         method: 'POST',
//         url: 'http://localhost:8082/auth/login',
//       }, {
//         statusCode: 200,
//         body: loginResponse,
//       }).as('postLogin');

//       cy.visit('http://localhost:3000');
//       cy.get(':nth-child(1) > .Login-Field').type('12345678912');
//       cy.get(':nth-child(2) > .Login-Field').type('leonardo');
//       cy.get('.Login-Button').click();

//       // Aguarda a interceptação da chamada POST /auth/login
//       cy.wait('@postLogin');
//     });

//     cy.intercept('GET', '**/postagens', {
//       fixture: 'postagens.json', // Crie um arquivo postagens.json na pasta fixtures com os dados que você deseja
//     }).as('getPostagens');

//     cy.get('[href="/home"]').click();
//     cy.wait('@getPostagens');

//     cy.get(':nth-child(1) > .post-body').click();
//     cy.get('[href="/agendamento"]').click();

//     cy.intercept('GET', '**/postagens', {
//       fixture: 'postagens.json', // Crie um arquivo postagens.json na pasta fixtures com os dados que você deseja
//     }).as('getPostagens');
//     cy.get('[href="/home"]').click();
//     cy.wait('@getPostagens');
    
//     cy.get('.rs-navbar-right > .rs-navbar-item > .rs-navbar-item-icon').click();
//     cy.contains('Login').should('be.visible');
//     /* ==== End Cypress Studio ==== */
//   });
// });
