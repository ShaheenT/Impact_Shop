describe('Locked Out User', () => {
    it('should not be able to log in', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
  
      // Replace with the actual username and password for the locked out user
      cy.login('locked_out_user', 'password')
  
      // Replace with the actual error message for a locked out user
      cy.get('.error-message').should('contain', 'Your account has been locked.')
    })
  })
  
  // Commit: Add user flow and test case for locked out user