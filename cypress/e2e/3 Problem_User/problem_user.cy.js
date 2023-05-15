describe('Problem User', () => {
    it('should be able to login but images do not load', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
  
      cy.login('problem_user', 'secret_sauce')
  
      // Verify user has logged in
      cy.get('.welcome-message').should('contain', 'Welcome, problem_user')
  
      // Check that images are not loading
      cy.get('img').each(($el) => {
        cy.wrap($el).should('have.attr', 'src').and('match', /^data:image\/gif;base64/)
      })
    })
  })

  // Commit message: Add user flow and test case for problem user

  
  