it('Displays product image', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_img').should('be.visible')
    cy.get('.inventory_details_img').should('have.attr', 'src').should('include', 'sauce-backpack')
  })
  