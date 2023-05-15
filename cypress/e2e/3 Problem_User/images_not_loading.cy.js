describe('Problem User', () => {
    it('should be able to login but images do not load', () => {
      cy.visit('https://qa-challenge.codesubmit.io')
  
      // Replace with the actual username and password for the problem user
      cy.login('problem_user', 'password')
  
      // Verify user has logged in
      cy.get('.welcome-message').should('contain', 'Welcome, problem_user')
  
      // Check that images are not loading
      cy.get('img').each(($el) => {
        cy.wrap($el).should('have.attr', 'src').and('match', /^data:image\/gif;base64/)
      })
    })
  })

  //Commit: Add user flow and test case for problem user
  