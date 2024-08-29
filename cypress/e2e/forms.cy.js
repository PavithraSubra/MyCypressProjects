/// <reference types ="Cypress"/>

describe('forms, buttons & checkbox', () => {
  it('submit and assert forms ', () => {
    //Load the form - Practice with sample website
    cy.visit('https://practice-automation.com/form-fields/')


    // Fill the form
    setTimeout(800)
    // Enter username
    cy.get('#name-input').type('ABC')
    
    //enter password
    cy.contains('Password').type('ABC')

    //Select water from the checkbox list
    cy.contains('Water').click()

    //Select Red from the checkbox list
     cy.contains('Red').click()
    
     // Enter email id
    cy.get('#email').type('abc@test.com')

    //Enter comments
    cy.get('#message').type('Hello It finally works!')

    //Click on Submit
    cy.contains('Submit').click()

    //Assert form details
    // Check for the form submission response - ALert box with a message
    cy.on('window:alert', (alertBox)=> {
      expect(alertBox).to.contains('Message received!')
    })
    
  })
})