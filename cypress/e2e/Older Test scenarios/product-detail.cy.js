describe('Product Details', () => {
    it('Displays product details', () => {
      cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
      cy.get('.inventory_item_name').first().click()
      cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack')
      cy.get('.inventory_details_price').should('contain', '$29.99')
      cy.get('.inventory_details_desc').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
      cy.get('.btn_primary.btn_inventory').should('contain', 'Add to cart')
    })
  
    it('Adds product to cart', () => {
      cy.visit('https://qa-challenge.codesubmit.io/inventory.html')
      cy.get('.inventory_item_name').first().click()
      cy.get('.btn_primary.btn_inventory').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
    })
  })
  