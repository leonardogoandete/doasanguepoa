describe('template spec', () => {

  it('firefox-doasangue', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get(':nth-child(1) > .Login-Field').clear('1');
    cy.get(':nth-child(1) > .Login-Field').type('12345678912');
    cy.get(':nth-child(2) > .Login-Field').clear('le');
    cy.get(':nth-child(2) > .Login-Field').type('leonardo');
    cy.get('.register').click();
    cy.get('.Login-Button').click();
    cy.get('[href="/home"]').click();
    cy.get('.rs-navbar-right > .rs-navbar-item').click();
    cy.get(':nth-child(1) > .Login-Field').click();
    cy.get(':nth-child(1) > .Login-Field').click();
    cy.get(':nth-child(1) > .Login-Field').clear('8702051700012');
    cy.get(':nth-child(1) > .Login-Field').type('87020517000120');
    cy.get(':nth-child(2) > .Login-Field').clear('c');
    cy.get(':nth-child(2) > .Login-Field').type('clinicas');
    cy.get('.Login-Button').click();
    cy.get('[href="/minhas-postagens"]').click();
    cy.get('[href="/home"]').click();
    cy.get('.formPostagem').click();
    cy.get('.rs-btn').click();
    cy.get('[href="/home"]').click();
    cy.get('.rs-navbar-right > .rs-navbar-item').click();
    cy.get(':nth-child(1) > .Login-Field').click();
    cy.get(':nth-child(1) > .Login-Field').click();
    /* ==== End Cypress Studio ==== */
  });
})