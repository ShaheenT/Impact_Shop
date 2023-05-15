describe('Locked Out User', () => {
    it('cannot log in', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
  
    it('displays an error message when attempting to add a product to their cart', () => {
      cy.visit('/inventory.html')
      cy.contains('Sauce Labs Backpack').should('not.exist')
    })
  
    it('cannot check out', () => {
      cy.visit('/cart.html')
      cy.get('[data-test="checkout"]').should('be.disabled')
    })
  
    it('can view the products page but cannot interact with any elements', () => {
      cy.visit('/inventory.html')
      cy.get('.inventory_item').should('not.exist')
    })
  
    it('is redirected to the login page if they attempt to access any other pages', () => {
      cy.visit('/cart.html')
      cy.url().should('include', '/index.html')
    })
  })
  