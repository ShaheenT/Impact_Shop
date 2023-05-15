describe('Online Shop Tests', function() {
    beforeEach(function() {
      // This would be the URL for your application
      cy.visit('https://qa-challenge.codesubmit.io');
    });
  
    // Test scenario for standard_user
    it('standard_user flow', function() {
      // Fill in the login form and submit
      cy.get('input[name=username]').type('standard_user');
      cy.get('input[name=password]').type('password');
      cy.get('button[type=submit]').click();
  
      // Assert that the user is logged in by checking that the logout button is visible
      cy.get('button.logout').should('be.visible');
  
      // Add an item to the cart
      cy.get('button.add-to-cart').first().click();
  
      // Go to the cart and checkout
      cy.get('button.cart').click();
      cy.get('button.checkout').click();
  
      // Assert that the user has been redirected to the confirmation page
      cy.url().should('include', '/confirmation');
  
      // Log out
      cy.get('button.logout').click();
  
      // Assert that the user is logged out by checking that the login button is visible
      cy.get('button.login').should('be.visible');
    });
  
    // Test scenario for locked_out_user
    it('locked_out_user flow', function() {
      // Fill in the login form and submit
      cy.get('input[name=username]').type('locked_out_user');
      cy.get('input[name=password]').type('password');
      cy.get('button[type=submit]').click();
  
      // Assert that an error message is displayed
      cy.get('.error-message').should('be.visible');
    });
  
    // Continue with other user flows...
  });
  