describe('Standard User', () => {
    it('can log in successfully', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('can add a product to their cart', () => {
      cy.visit('/inventory.html')
      cy.contains('Sauce Labs Backpack').click()
      cy.get('[data-test="add-to-cart"]').click()
      cy.get('[data-test="shopping-cart-badge"]').contains('1')
    })
  
    it('can remove a product from their cart', () => {
      cy.visit('/cart.html')
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })
  
    it('can check out and complete a purchase', () => {
      cy.visit('/inventory.html')
      cy.contains('Sauce Labs Backpack').click()
      cy.get('[data-test="add-to-cart"]').click()
      cy.visit('/cart.html')
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="first-name"]').type('John')
      cy.get('[data-test="last-name"]').type('Doe')
      cy.get('[data-test="postal-code"]').type('12345')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.contains('THANK YOU FOR YOUR ORDER')
    })
  
    it('can view their order history', () => {
      cy.visit('/inventory.html?view=orders')
      cy.contains('Order History')
    })
  
    it('can log out successfully', () => {
      cy.get('[data-test="logout"]').click()
      cy.url().should('include', '/index.html')
    })
  })
  