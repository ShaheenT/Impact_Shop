describe('Cart', () => {
    it('Displays products in cart', () => {
      cy.visit('https://qa-challenge.codesubmit.io/cart.html')
      cy.get('.cart_item').should('have.length', 1)
      cy.get('.cart_item_label > a').should('contain', 'Sauce Labs Backpack')
      cy.get('.inventory_item_price').should('contain', '$29.99')
    })
  
    it('Removes product from cart', () => {
      cy.visit('https://qa-challenge.codesubmit.io/cart.html')
      cy.get('.cart_item').first().find('.cart_button').click()
      cy.get('.cart_item').should('not.exist')
    })
  })
  