# Impact_Shop
Impact Assignment for Online Shop

This repository contains automated browser tests for the core functionalities of the Online Shop application.

-	Project Structure



├──impact_shop
├── cypress
├── e2e
│ │ ├── standard_user.cy.js
│ ├── locked_out_user.cy.js
│ │ ├── problem_user.cy.js
│ └── performance_glitch_user.cy.js
│ └── ...
└── README.md


 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

- Node.js and npm: You can download these from the [official Node.js website](https://nodejs.org/).

 Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.

Running the Tests

1. Open the Cypress Test Runner by running `npx cypress open`.
2. Click on a spec file to run the tests.

Test Cases

The test cases are organized by user type. Each user type has its own spec file in the `impact_shop/cypress/e2e/…` directory. Each spec file contains several test cases covering different user flows, such as login, product browsing, add to cart, and checkout.

Refer to the comments in the spec files for detailed descriptions of each test case. Here is a general overview:

- Standard User: Tests the main user flows of the application, such as successful login, page responsiveness, add to cart functionality, and successful checkout. It also includes some edge cases, like updating the product quantity in the cart, removing a product from the cart, and checking out with invalid payment or shipping information.

- Locked Out User: Tests the behaviour of the application when a user is locked out. The user should not be able to log in.

- Problem User: Tests the application's behaviour with a user for whom images are not loading. The site should still be usable even without images.

- Performance Glitch User: Tests the application's behaviour with a user who experiences high loading times. The site should still work as expected.

 Built With:

- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.

Authors

- Shaheen Toefy - Initial work – ShaheenT (Github)

Acknowledgments

- The product team at Impact for the [Online Shop MVP](https://qa-challenge.codesubmit.io).

![image](https://github.com/ShaheenT/Impact_Shop/assets/25295894/3873dda7-c729-45b9-897a-f2ff7a0c61e2)
