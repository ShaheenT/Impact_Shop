describe('Checkout', () => {
    it('Completes checkout process', () => {
      cy.visit('https://qa-challenge.codesubmit.io/checkout-step-one.html')
      cy.get('#first-name').type('John')
      cy.get('#last-name').type('Doe')
      cy.get('#postal-code').type('12345')
      cy.get('#continue').click()
      cy.get('.summary_info > :nth-child(1)').should('contain', 'Sauce Labs Backpack')
      cy.get('.summary_subtotal_label').should('contain', 'Item total:')
      cy.get('.summary_subtotal_value').should('contain', '$29.99')
      cy.get('#finish').click()
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    })
  })
  