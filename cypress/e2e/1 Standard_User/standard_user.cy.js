//impact_shop/ cypress/e2e/standard_user/standard_user.cy.js

describe('Standard User', () => {
    const standardUser = {
      username: 'standard_user', // replace with actual username
      password: 'secret_sauce', // replace with actual password
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
  

// standard_user_edge_cases 


describe('Product Browsing Flow', () => {
    beforeEach(() => {
      // Log in before each product browsing test case
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
    });

    // Test Case 2: Page Responsiveness
    it('should maintain usability and readability at different window sizes', () => {
      // You may need to adjust this test based on your app's specific responsive breakpoints
      [1920, 1366, 1024, 768, 425, 375].forEach(viewportWidth => {
        cy.viewport(viewportWidth, 1080);
        cy.get('.product-list').should('be.visible');
      });
    });
  });

  describe('Add to Cart Flow', () => {
    beforeEach(() => {
      // Log in and add a product to the cart before each add to cart test case
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('.product-list .product:first').click();
      cy.get('#add-to-cart').click();
    });

    // Test Case 2: Update product quantity
    it('should update the product quantity in the cart', () => {
      cy.get('#cart').click();
      cy.get('.cart-item .quantity').clear().type('2');
      cy.get('.cart-item .quantity').should('have.value', '2');
    });

    // Test Case 3: Remove product from cart
    it('should remove the product from the cart', () => {
      cy.get('#cart').click();
      cy.get('.cart-item .remove').click();
      cy.get('.cart-item').should('not.exist');
    });
  });

  describe('Checkout Flow', () => {
    beforeEach(() => {
      // Log in, add a product to the cart, and go to the checkout page before each checkout test case
      cy.get('#username').type(standardUser.username);
      cy.get('#password').type(standardUser.password);
      cy.get('#login').click();
      cy.get('.product-list .product:first').click();
      cy.get('#add-to-cart').click();
      cy.get('#cart').click();
      cy.get('#checkout').click();
    });

     // Test Case 2: Unsuccessful checkout with invalid payment information
     it('should fail with invalid payment information', () => {
        cy.get('#payment-info').type('invalid_payment_info');
        cy.get('#confirm-purchase').click();
        cy.get('.error').should('be.visible');
      });
  
      // Test Case 3: Unsuccessful checkout with invalid shipping information
      it('should fail with invalid shipping information', () => {
        cy.get('#shipping-info').type('invalid_shipping_info');
        cy.get('#confirm-purchase').click();
        cy.get('.error').should('be.visible');
      });
  
      // Test Case 4: Checkout with slow network conditions
      it('should succeed under slow network conditions', () => {
        cy.intercept(
          {
            method: 'POST',
            url: '/checkout',
          },
          (req) => {
            req.delay(5000); // delay the request by 5 seconds
          },
        );
  
        cy.get('#payment-info').type('valid_payment_info');
        cy.get('#shipping-info').type('valid_shipping_info');
        cy.get('#confirm-purchase').click();
        cy.get('.success').should('be.visible');
      });
    });
  
  
  