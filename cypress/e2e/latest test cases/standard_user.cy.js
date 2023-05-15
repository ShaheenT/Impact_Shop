// cypress/impact_shop/e2e/latest_test_cases/standard_user.cy.js

describe('Standard User', () => {
    const standardUser = {
      username: 'standard_user', // replace with actual username
      password: 'secret_password', // replace with actual password
    };
  
    beforeEach(() => {
      // Visit the login page before each test case
      cy.visit('https://qa-challenge.codesubmit.io');
    });
  
    // Test Case 1: Successful login
    it('should log in successfully with correct credentials', () => {
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
  
      // Check if we were redirected to the home page
      cy.url().should('include', '/home'); 
    });
  
    // Test Case 2: Unsuccessful login with incorrect password
    it('should fail to log in with incorrect password', () => {
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type('wrong_password');
      cy.get('#login').click();
  
      // Check if an error message is displayed
      cy.get('.error').should('be.visible');
    });
     
  
  });

describe('Standard User', () => {
    const standardUser = {
      username: 'standard_user', // replace with actual username
      password: 'secret_password', // replace with actual password
    };
  
    beforeEach(() => {
      cy.visit('https://qa-challenge.codesubmit.io');
    });
  
  
    // Test Case 3: Unsuccessful login with empty credentials
    it('should fail to log in with empty credentials', () => {
      cy.get('#login').click();
      cy.get('.error').should('be.visible');
    });
  
    // Test Case 4: Unsuccessful login with empty password
    it('should fail to log in with empty password', () => {
      cy.get('#username').type(standardUser.username);
      cy.get('#login').click();
      cy.get('.error').should('be.visible');
    });
  
    // Test Case 5: Unsuccessful login with empty username
    it('should fail to log in with empty username', () => {
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('.error').should('be.visible');
    });
  
    // Test Case 6: Successful logout
    it('should log out successfully', () => {
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('#logout').click();
      cy.url().should('include', '/login');
    });
  
    // Test Case 7: Unsuccessful login with special characters in username
    it('should fail to log in with special characters in username', () => {
      cy.get('#username').type('standard_user@#!');
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('.error').should('be.visible');
    });
  
    // Test Case 8: Unsuccessful login with excessively long username
    it('should fail to log in with excessively long username', () => {
      cy.get('#username').type('standard_user_standard_user_standard_user_standard_user');
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('.error').should('be.visible');
    });
  });

  // Commit: Implement successful login test for standard user.


  
  