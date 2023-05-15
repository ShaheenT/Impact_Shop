describe('Online Shop Tests', function() {
    // User login details
    const standardUser = { username: 'standard_user', password: 'password' };
    const problemUser = { username: 'problem_user', password: 'password' };
    const performanceGlitchUser = { username: 'performance_glitch_user', password: 'password' };
  
    beforeEach(function() {
      // Visit the site before each test
      cy.visit('https://qa-challenge.codesubmit.io');
    });
  
    afterEach(function() {
      // Log out after each test if possible
      cy.get('button.logout').click();
    });
  
    describe('Standard User', function() {
      beforeEach(function() {
        // Log in as standard user before each test
        cy.get('input[name=username]').type(standardUser.username);
        cy.get('input[name=password]').type(standardUser.password);
        cy.get('button[type=submit]').click();
      });
  
      // Tests for standard user go here...
    });
  
    describe('Problem User', function() {
      beforeEach(function() {
        // Log in as problem user before each test
        cy.get('input[name=username]').type(problemUser.username);
        cy.get('input[name=password]').type(problemUser.password);
        cy.get('button[type=submit]').click();
      });
  
      it('should be able to browse products without images', function() {
        // Assert that the products are visible but images are not
        cy.get('.product').should('be.visible');
        cy.get('.product img').should('not.be.visible');
      });
  
      // Other tests for problem user go here...
    });
  
    describe('Performance Glitch User', function() {
      beforeEach(function() {
        // Log in as performance glitch user before each test
        cy.get('input[name=username]').type(performanceGlitchUser.username);
        cy.get('input[name=password]').type(performanceGlitchUser.password);
        cy.get('button[type=submit]').click();
      });
  
      it('should be able to browse products despite slow loading', function() {
        // Assert that the products are eventually visible
        cy.get('.product', { timeout: 10000 }).should('be.visible');
      });
  
      // Other tests for performance glitch user go here...
    });
  
    describe('Locked Out User', function() {
      it('should not be able to log in', function() {
        // Try to log in as locked out user
        cy.get('input[name=username]').type('locked_out_user');
        cy.get('input[name=password]').type('password');
        cy.get('button[type=submit]').click();
  
        // Assert that an error message is displayed
        cy.get('.error-message').should('be.visible');
      });
    });
  });
  