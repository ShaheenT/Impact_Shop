describe('Standard User', function() {
    // ...
  
    it('should not be able to login with invalid credentials', function() {
      cy.visit('/login');
  
      cy.get('input[name=username]').type('invalid_username');
      cy.get('input[name=password]').type('invalid_password');
      cy.get('button[type=submit]').click();
  
      // Assert that an error message is displayed
      cy.get('.error-message').should('be.visible');
    });
  
    // ...
  
    it('should not be able to checkout with an empty cart', function() {
      cy.visit('/cart');
  
      // Assert that the checkout button is disabled or not present
      cy.get('button.checkout').should('be.disabled');
    });
  
    // ...
  });
  