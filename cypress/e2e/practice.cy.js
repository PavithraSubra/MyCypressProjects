/// <reference types ="Cypress"/>

describe('Web and Mobile - Browser tests', () => {

    context('Run the tests on Web Application ', () => {
      it('Assert web test', () => {   
        cy.visit('https://practice-automation.com')
        cy.contains("Welcome to your software automation practice website!")
        
        //Javascript delays
        cy.get('.wp-container-core-buttons-is-layout-1 > .wp-block-button > .wp-block-button__link').should('be.visible').click()
       // cy.contains("JavaScript Delays for your business needs.").should('be.visible')
        
        //Start
        cy.get('.custom_btn').should('be.visible').click()

        cy.get('#delay').wait(15000).should('be.visible')
        cy.contains('Liftoff!').should('be.visible')

      })
    })


})