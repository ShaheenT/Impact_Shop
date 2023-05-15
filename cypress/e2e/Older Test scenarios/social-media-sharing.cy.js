it('Displays social media sharing buttons', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_social').should('be.visible')
    cy.get('.inventory_details_social a').eq(0).should('have.attr', 'href').should('include', 'twitter')
  })
  