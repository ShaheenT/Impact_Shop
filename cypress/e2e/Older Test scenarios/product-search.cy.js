describe('Product Search', () => {
    it('Searches for a product', () => {
      cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
      cy.get('.inventory_filter').type('Sauce')
      cy.get('.inventory_list > .inventory_item').should('have.length', 2)
    })
  
    it('Filters search results by price', () => {
      cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
      cy.get('#inventory_filter_container > select').select('Price (low to high)')
      cy.get('.inventory_list > .inventory_item').first().should('contain', '$7.99')
    })
  })
  