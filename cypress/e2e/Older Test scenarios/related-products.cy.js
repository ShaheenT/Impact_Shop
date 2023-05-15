it('Displays related products', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_related_title').should('contain', 'Related Products')
    cy.get('.inventory_item_name').eq(1).should('contain', 'Sauce Labs Bolt T-Shirt')
  })
  