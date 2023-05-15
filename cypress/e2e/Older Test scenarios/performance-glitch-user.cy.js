describe('Performance Glitch User', () => {
    before(() => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('performance_glitch_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('can add a product to their cart', () => {
      cy.visit('/inventory.html')
      cy.contains('Sauce Labs Bolt T-Shirt').click()
      cy.get('[data-test="add-to-cart"]').click()
      cy.get('[data-test="shopping-cart-badge"]').contains('1')
    })
  
    it('can check out successfully, but with a delay', () => {
      cy.visit('/cart.html')
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="first-name"]').type('John')
      cy.get('[data-test="last-name"]').type('Doe')
      cy.get('[data-test="postal-code"]').type('12345')
      cy.get('[data-test="continue"]').click()
      cy.wait(5000) // add a delay to simulate slow performance
      cy.get('[data-test="finish"]').click()
      cy.contains('THANK YOU FOR YOUR ORDER')
    })
  
    it('can view their order history', () => {
      cy.visit('/inventory.html?view=orders')
      cy.contains('Order History')
    })
  
    it('can interact with all elements on the site, but with a delay', () => {
      cy.visit('/inventory.html')
      cy.wait(5000) // add a delay to simulate slow performance
      cy.get('.inventory_item').should('have.length', 6)
      cy.get('[data-test="add-to-cart"]').first().click()
      cy.get('[data-test="shopping-cart-badge"]').contains('1')
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
      cy.get('[data-test="menu-button"]').click()
      cy.get('[data-test="logout-sidebar"]').click()
      cy.url().should('include', '/index.html')
    })
    it('can log out successfully', () => {
        cy.get('[data-test="logout"]').click()
        cy.url().should('include', '/index.html')
      })
    })
    
   
  