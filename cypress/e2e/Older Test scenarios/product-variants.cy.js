it('Displays product variants', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_variants_title').should('contain', 'Product Options')
    cy.get('.inventory_details_variants_select').select('Red')
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack - Red')
  })
  