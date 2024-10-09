/// <reference types ="Cypress"/>

describe('Web and Mobile - Browser tests', () => {

    context('Run the tests on Web Application ', () => {
      it('Assert web test', () => {   
        cy.visit('https://www.prismcloudinc.com')
        cy.url().should('contain', 'prismcloudinc')
        cy.contains("We create digital solutions.")
        
        //Services
        cy.get('.nav-link').eq(1).should('be.visible').click()
        cy.contains("Built for your business needs.").should('be.visible')
        
        //Blog
        cy.get('.nav-link').eq(2).should('be.visible').click()
        cy.contains("Our insights.").should('be.visible')

        //Contact Us
        cy.get('.kit-nav-buttons-wrap').should('be.visible').click()
        cy.contains("Let's talk about your next project.").should('be.visible')
        cy.contains("Get in touch with us")
        cy.get('#contact-first-name').should('be.visible').type('Pavithra')
        cy.get('#contact-last-name').should('be.visible').type('Subramanian')
        cy.get('#contact-email').should('be.visible').type('pavithra.subramanian@abc.com')
                

      })
    })
    context('Run the test on Mobile Browser ', () => {
      it('Assert mobile test', () => {   
        
        cy.viewport('iphone-6');
        //cy.viewport(720,1280)
        cy.visit('https://www.prismcloudinc.com')
        cy.url().should('contain', 'prismcloudinc')
        cy.contains("We create digital solutions.")
        
        //Home - Title
        cy.get('.menu-button > img').should('be.visible')            
        

        //CLick on Start Today
        cy.get('.home-hero-text-wrap > .button-wrap > .button-primary > .primary-button-text').should('be.visible').click()


        //Contact us
        cy.contains("Let's talk about your next project.").should('be.visible')
        cy.contains("Get in touch with us")
        cy.get('#contact-first-name').should('be.visible').type('Pavithra')
        cy.get('#contact-last-name').should('be.visible').type('Subramanian')
        cy.get('#contact-email').should('be.visible').type('pavithra.subramanian@abc.com')


        //Menu button - Home
        cy.get('.menu-button').should('be.visible').click()
        cy.get('.nav-menu-2 > [href="/"]').should('contain','Home').click()
        cy.contains("We create digital solutions.")


        //Menu button - Services
        cy.get('.menu-button').should('be.visible').click()
        cy.get('.nav-menu-2 > [href="/services"]').should('contain','Services').click()
        cy.contains("Built for your business needs.").should('be.visible')

        //Menu button - Blog
        cy.get('.menu-button').should('be.visible').click()
        cy.get('.nav-menu-2 > [href="/blogs"]').should('contain','Blog').click()
        cy.contains("Our insights.").should('be.visible')


        //Menu Button - CONTACT US
        cy.get('.menu-button').should('be.visible').click()
        cy.get('.button-small-inv').should('be.visible').click()
        cy.contains("Let's talk about your next project.").should('be.visible')

      })    
    })

})