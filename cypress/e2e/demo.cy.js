/// <reference types ="Cypress"/>

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.prismcloudinc.com/services')
  })
  it('Assert URL', () => {   
    cy.url().should('contain', 'prismcloudinc')
  })
  it('Assert Title', () => {
    //cy.visit('https://www.prismcloudinc.com/services')
    cy.title().should('contain', 'Services')
  })
  it('Assert Element', () => {
    //cy.visit('https://www.prismcloudinc.com/services')
    cy.get('h1').should('be.visible')
  })

  it('Reload and logs', () => {
   // cy.visit('https://www.prismcloudinc.com/services')
    cy.log('Before reload')
    cy.reload()
    cy.log('After reload')
 
  })
})