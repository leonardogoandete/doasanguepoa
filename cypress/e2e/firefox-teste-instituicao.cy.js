describe('template spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('teste-instituicao', function () {
    /* ==== Generated with Cypress Studio ==== */

    cy.fixture('loginResponseInstituicao.json').then((loginResponse) => {
      // Interceptação para a chamada POST /auth/login
      cy.intercept({
        method: 'POST',
        url: '**/auth/login',
      }, {
        statusCode: 200,
        body: loginResponse,
      }).as('postLogin');

      cy.visit('http://localhost:3000');
      cy.get(':nth-child(1) > .Login-Field').type('87020517000120');
      cy.get(':nth-child(2) > .Login-Field').type('clinicas');
      cy.get('.Login-Button').click();

      // Aguarda a interceptação da chamada POST /auth/login
      cy.wait('@postLogin');
    });

    // Mockando a resposta da API para a rota /postagens/instituicao usando cy.fixture
    cy.fixture('minhas-postagens.json').then((postagens) => {
      cy.intercept('GET', '**/postagens/instituicao', { body: postagens }).as('getMinhasPostagens');
    });

    cy.get('[href="/minhas-postagens"]').click();

    // Aguarda a interceptação da chamada da API
    cy.wait('@getMinhasPostagens');

    cy.intercept('GET', '**/postagens', {
      fixture: 'postagens.json', // Crie um arquivo postagens.json na pasta fixtures com os dados que você deseja
    }).as('getPostagens');
    cy.get('[href="/home"]').click();
    cy.wait('@getPostagens');

    cy.get('.rs-navbar-right > .rs-navbar-item > .rs-navbar-item-icon').click();
    cy.contains('Login').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});
