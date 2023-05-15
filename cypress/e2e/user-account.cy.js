describe('User Account', () => {
    it('Displays user account information', () => {
      cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
      cy.contains('Open Menu').click()
      cy.contains('All Items').click()
      cy.contains('Sauce Labs Backpack').click()
      cy.get('.inventory_details_back_button').click()
      cy.contains('Open Menu').click()
      cy.contains('My Account').click()
      cy.get('.tab_item').first().should('contain', 'Account details')
      cy.get('#firstName').should('have.value', 'Test')
      cy.get('#lastName').should('have.value', 'User')
      cy.get('#email').should('have.value', 'testuser@example.com')
    })
  
    it('Edits user account information', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
    })
    