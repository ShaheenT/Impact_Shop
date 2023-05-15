it('Displays product reviews', () => {
    cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_review').should('be.visible')
    cy.get('.inventory_details_review .review_rating').should('have.text', '4.5')
  })
  