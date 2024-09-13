/// <reference types ="Cypress"/>

describe('Demo project', () => {
  beforeEach(() => {
    //cy.visit('https://www.prismcloudinc.com/services')
    cy.log('Before start')

    cy.visit('http://example.cypress.io')
    cy.log('After start')
  })
  it('Assert URL', () => {   
    cy.url().should('contain', 'cypress')
  })
  it('Assert Title', () => {
    cy.title().should('contain', 'Kitchen Sink')
  })
  it('Assert Element', () => {
    cy.get('h1').should('be.visible')
  })

  it('Reload and logs', () => { 
    cy.log('Before reload')
    cy.reload()
    cy.log('After reload')
 
  })
})