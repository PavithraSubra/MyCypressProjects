/// <reference types ="Cypress"/>

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://practice-automation.com/modals/')
  })

  it('Assert simple modal', () => {
    cy.get('#simpleModal').should('be.visible').click()
    cy.wait(500)
    cy.get('p').contains('Hi, I’m a simple modal.').should('be.visible')
    cy.get('#popmake-1318').should('be.visible')
    cy.get('[aria-label="Close"]').eq(1).click()
  })
  it('Assert form modal', () => {
    cy.get('#formModal').should('be.visible').click()
    cy.wait(500)
    cy.get('#pum_popup_title_674').contains('Modal Containing A Form').should('be.visible')
    cy.get('#g1051-name').should('be.visible').type('Pavi')
    cy.get('#g1051-email').should('be.visible').type('Pavi@abc.com')
    cy.get('.pushbutton-wide').should('be.visible').click()
  })
})