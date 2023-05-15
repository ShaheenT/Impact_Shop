describe('Login', () => {
    it('Logs in with valid credentials', () => {
      cy.visit('https://qa-challenge.codesubmit.io/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('eq', 'https://qa-challenge.codesubmit.io/inventory.html')
    })
  
    it('Fails to log in with invalid credentials', () => {
      cy.visit('https://qa-challenge.codesubmit.io/')
      cy.get('#user-name').type('invalid_user')
      cy.get('#password').type('invalid_password')
      cy.get('#login-button').click()
      cy.contains('Epic sadface: Username and password do not match any user in this service')
    })
  })

  describe('Login Functionality', function () {
    beforeEach(function () {
      cy.visit('https://qa-challenge.codesubmit.io/')
    })
  
    it('should log in a user with valid credentials', function () {
      cy.get('#user-name').type('standard_user@test.com')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('should display an error message for incorrect password', function () {
      cy.get('#user-name').type('standard_user@test.com')
      cy.get('#password').type('incorrect_password')
      cy.get('#login-button').click()
      cy.get('h3[data-test="error"]').should('be.visible')
    })
  
    it('should display an error message for incorrect email', function () {
      cy.get('#user-name').type('invalid_email@test.com')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get('h3[data-test="error"]').should('be.visible')
    })
  
    it('should display an error message for locked-out user', function () {
      cy.get('#user-name').type('locked_out_user@test.com')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get('h3[data-test="error"]').should('be.visible')
    })
  
    it('should display an error message for problem user', function () {
      cy.get('#user-name').type('problem_user@test.com')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get('h3[data-test="error"]').should('be.visible')
    })
  
    it('should log in a user with high loading times', function () {
      cy.get('#user-name').type('performance_glitch_user@test.com')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
    })
  })
  