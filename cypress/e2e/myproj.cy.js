/// <reference types ="Cypress"/>
describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://www.prismcloudinc.com')
    })

    it('Assert URL', () => {   
        cy.url().should('contain', 'prismcloudinc')
      })

    it('Assert Title', () => {
    cy.contains("We create digital solutions.")

    })
    it('Assert Services  ', ()=> {
        cy.get('.nav-link').eq(1).should('be.visible').click()
        cy.contains("Built for your business needs.").should('be.visible')
    })    

    it('Assert Blog  ', ()=> {
        cy.get('.nav-link').eq(2).should('be.visible').click()
        cy.contains("Our insights.").should('be.visible')
    })    
    it('Assert Contact Us  ', ()=> {
        cy.get('.kit-nav-buttons-wrap').should('be.visible').click()
        cy.contains("Let's talk about your next project.").should('be.visible').click()
        cy.contains("Get in touch with us")
        cy.get('#contact-first-name').should('be.visible').type('Pavithra')
        cy.get('#contact-last-name').should('be.visible').type('Subramanian')
        cy.get('#contact-email').should('be.visible').type('pavithra.subramanian@abc.com')
       // cy.get('.button-secondary').should('be.visible').click()
       
    })    
   
})