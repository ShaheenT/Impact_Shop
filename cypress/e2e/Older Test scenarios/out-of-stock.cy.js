it('Displays out of stock message', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').eq(3).click()
    cy.get('.btn_primary.btn_inventory').should('be.disabled')
    cy.get('.inventory_details_desc').should('contain', 'Out of stock')
  })
  