/// <reference types ="Cypress"/>

describe('forms, buttons & checkbox', () => {
  it('submit and assert forms ', () => {
    //Load the form
    cy.visit('https://practice-automation.com/form-fields/')
//   cy.visit('https://meet.google.com/landing?hs=197&authuser=0&pli=1')
 //   cy.get('[id="pum_popup_title_674"]').should('be.visible')
    // Fill the form
    setTimeout(800)
    cy.get('#name-input').type('ABC')
    //cy.get('input[fdprocessedid="2ep73"]').type('ABC')
    cy.contains('Password').type('ABC')
    cy.contains('Water').click()
     cy.contains('Red').click()
    cy.get('#email').type('abc@test.com')
    cy.get('#message').type('Hello It finally works!')
    //cy.get('#submit-btn').click()
    cy.contains('Submit').click()
    //Assert form details

    cy.on('window:alert', (alertBox)=> {
      expect(alertBox).to.contains('Message received!')
    })
    
  })
})