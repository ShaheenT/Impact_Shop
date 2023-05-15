// cypress/impact_shop/e2e/edge_test_cases/standard_user.cy.js

describe('Standard User', () => {
    const standardUser = {
      username: 'standard_user', // replace with actual username
      password: 'secret_password', // replace with actual password
    };
  
    //..
  
    describe('Product Browsing Flow', () => {
      beforeEach(() => {
        // Log in before each product browsing test case
        cy.get('#username').type(standardUser.username);
        cy.get('#password').type(standardUser.password);
        cy.get('#login').click();
      });

      // Commit: Implement test for page responsiveness during product browsing
  
      // Test Case 2: Page Responsiveness
      it('should maintain usability and readability at different window sizes', () => {
        // You may need to adjust this test based on your app's specific responsive breakpoints
        [1920, 1366, 1024, 768, 425, 375].forEach(viewportWidth => {
          cy.viewport(viewportWidth, 1080);
          cy.get('.product-list').should('be.visible');
        });
      });
    });

    // Commit: Implement test for page responsiveness
  
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

      // Commit: Implement test for updating product quantity in the cart
  
      // Test Case 3: Remove product from cart
      it('should remove the product from the cart', () => {
        cy.get('#cart').click();
        cy.get('.cart-item .remove').click();
        cy.get('.cart-item').should('not.exist');
      });
    });

    // Commit: Implement test for removing product from cart
  
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

      // Commit:  Implement test for checkout failure with invalid payment information

  
      // Test Case 3: Unsuccessful checkout with invalid shipping information
      it('should fail with invalid shipping information', () => {
        cy.get('#shipping-info').type('invalid_shipping_info');
        cy.get('#confirm-purchase').click();
        cy.get('.error').should('be.visible');
      });

      //Commit: Implement test for checkout failure with invalid shipping information

  
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
  });
  
  // Commit: Implement test for checkout process under slow network conditions.