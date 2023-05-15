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
  
      it('should be able to browse products', function() {
        // Assert that the products are visible
        cy.get('.product').should('be.visible');
      });
  
      it('should be able to add a product to the cart', function() {
        // Add the first product to the cart
        cy.get('button.add-to-cart').first().click();
  
        // Assert that the cart has been updated
        cy.get('.cart').should('contain', '1 item');
      });
  
      it('should be able to remove a product from the cart', function() {
        // Add the first product to the cart
        cy.get('button.add-to-cart').first().click();
  
        // Go to the cart
        cy.get('button.cart').click();
  
        // Remove the product from the cart
        cy.get('button.remove-from-cart').first().click();
  
        // Assert that the cart is empty
        cy.get('.cart').should('contain', 'No items');
      });
  
      it('should be able to checkout', function() {
        // Add the first product to the cart
        cy.get('button.add-to-cart').first().click();
  
        // Go to the cart
        cy.get('button.cart').click();
  
        // Checkout
        cy.get('button.checkout').click();
  
        // Assert that the user has been redirected to the confirmation page
        cy.url().should('include', '/confirmation');
      });
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
  
      it('should be able to add a product to the cart despite image problems', function() {
        // Add the first product to the cart
        cy.get('button.add-to-cart').first().click();
  
        // Assert that the cart has been updated
        cy.get('.cart').should('contain', '1 item');
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

    it('should be able to add a product to the cart despite slow loading', function() {
      // Add the first product to the cart
      cy.get('button.add-to-cart', { timeout: 10000 }).first().click();

      // Assert that the cart has been updated
      cy.get('.cart').should('contain', '1 item');
    });

    it('should be able to checkout despite slow loading', function() {
      // Add the first product to the cart
      cy.get('button.add-to-cart', { timeout: 10000 }).first().click();

      // Go to the cart
      cy.get('button.cart', { timeout: 10000 }).click();

      // Checkout
      cy.get('button.checkout', { timeout: 10000 }).click();

      // Assert that the user has been redirected to the confirmation page
      cy.url().should('include', '/confirmation');
    });
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

  