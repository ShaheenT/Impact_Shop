describe('Performance Glitch User', () => {
    it('should be able to navigate site but may experience high loading times', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
  
     
      cy.login('performance_glitch_user', 'secret_sauce')
  
      // Verify user has logged in
      cy.get('.welcome-message').should('contain', 'Welcome, performance_glitch_user')
  
      // Add a product to the cart
      cy.get('#add-to-cart-button').click()
  
      // Visit the cart page
      cy.visit('https://qa-challenge.codesubmit.io/cart')
  
      // Checkout
      cy.get('#checkout-button').click()
  
      // Expect high loading times but no errors
    })
  })
  