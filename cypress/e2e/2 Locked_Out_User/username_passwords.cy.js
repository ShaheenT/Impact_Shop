describe('Locked Out User', () => {
    it('should not be able to log in with incorrect password', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
  
      // Enter incorrect password for the locked out user
      cy.login('locked_out_user', 'incorrect_password')
  
      // Expect an error message related to invalid credentials
      cy.get('.error-message').should('contain', 'Invalid credentials.')
    })
  
    it('should handle password reset attempt', () => {
      cy.visit('https://qa-challenge.codesubmit.io/forgot-password')
  
      // Enter the username of the locked out user
      cy.get('#username').type('locked_out_user')
      cy.get('#submit').click()
  
      // The behavior should be defined according to the application's requirements
    })
  
    it('should handle account unlock attempt', () => {
      cy.visit('https://qa-challenge.codesubmit.io/unlock-account')
  
      // Enter the username of the locked out user
      cy.get('#username').type('locked_out_user')
      cy.get('#submit').click()
  
      // The application should handle this case according to its defined rules
    })
  })
// Commit: Add user flows and test cases for locked out user with incorrect password, password reset attempt, and account unlock attemp  