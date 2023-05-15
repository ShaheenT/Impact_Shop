describe('Problem User', () => {
    it('can log in successfully', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('problem_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('can add a product to their cart', () => {
        cy.visit('/inventory.html')
        cy.contains('Sauce Labs Fleece Jacket').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains('1')
      })
    
      it('displays an error message when attempting to check out', () => {
        cy.visit('/cart.html')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="error-message"]').contains('Error: Checkout not available')
      })
    
      it('can view the products page but cannot interact with any elements', () => {
        cy.visit('/inventory.html')
        cy.get('.inventory_item').should('not.exist')
      })
    
      it('is redirected to the login page if they attempt to access any other pages', () => {
        cy.visit('/cart.html')
        cy.url().should('include', '/index.html')
      })
    
      it('cannot view their order history', () => {
        cy.visit('/inventory.html?view=orders')
        cy.url().should('include', '/index.html')
      })
    
      it('can log out successfully', () => {
        cy.get('[data-test="logout"]').click()
        cy.url().should('include', '/index.html')
      })
    })
      