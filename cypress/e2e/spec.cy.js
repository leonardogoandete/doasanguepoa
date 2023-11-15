describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('teste-usuario', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(1) > .Login-Field').clear('1');
    cy.get(':nth-child(1) > .Login-Field').type('12345678912');
    cy.get(':nth-child(2) > .Login-Field').clear('le');
    cy.get(':nth-child(2) > .Login-Field').type('leonardo{enter}');
    //cy.get('.Login-Button').click();
    //cy.get('.rs-navbar-right > .rs-navbar-item').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('teste-instituicao', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(1) > .Login-Field').clear('87020517000120');
    cy.get(':nth-child(1) > .Login-Field').type('87020517000120');
    cy.get(':nth-child(2) > .Login-Field').clear('c');
    cy.get(':nth-child(2) > .Login-Field').type('clinicas{enter}');
    //cy.get('.Login-Button').click();
    //cy.get('.formPostagem').click();
    cy.get('.rs-btn').click();
    cy.get('[href="/minhas-postagens"]').click();
    cy.get(':nth-child(13) > .post-buttons > .delete-button').click();
    cy.get('[href="/home"]').click();
    cy.get('.rs-navbar-right > .rs-navbar-item').click();
    /* ==== End Cypress Studio ==== */
  });
})