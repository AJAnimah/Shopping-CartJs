Shopping Cart Web Application

This is a simple shopping cart web application, built using HTML, CSS, and JavaScript. The project includes various sections such as a navigation bar, a product listing, and a sidebar cart. Users can add items to their cart and proceed to the payment gateway.

Table of Contents

Project Overview
File Structure
Features
Technologies Used
How to Run the Project
Future Improvements

Project Overview

This project is a basic e-commerce page that allows users to browse products, add items to a cart, and proceed to the checkout. The project uses vanilla JavaScript to manage the shopping cart, and includes a simple payment gateway page.

Features:

Product Listings: A section displaying various products available for purchase.
Add to Cart: Items can be added to the cart with a dynamic cart count.
Sidebar Cart: A collapsible sidebar that shows the items added to the cart, with the ability to remove items.
Checkout: After adding products to the cart, users can proceed to a payment gateway page.
Form Validation: The payment form includes client-side validation for card number, expiry date, and CVV.

File Structure

The project has the following file structure:
    /project-directory
│
├── index.html                # Main shopping page
├── payment.html              # Payment gateway page
├── style.css                 # Stylesheet for styling the pages
├── App.js                    # JavaScript for handling cart functionality
├── /images                   # Directory containing images for products
│   ├── BAG.jpg
│   ├── Perfume.jpg
│   ├── item4.png
│   ├── item3.png
│   ├── Deodorant Stick for women.jpg
│   ├── bracelet.jpg
│   ├── smart watch for women.jpg
│   ├── spa gift.jpg
│   ├── perfume2.jpg
│   └── rose gift.jpg
└── README.md                 # Project documentation

Technologies Used

HTML: For creating the structure of the web pages.
CSS: For styling the pages.
JavaScript: For handling the dynamic behavior of the shopping cart (add/remove items, update total).
Font Awesome: For icons used in the navigation and cart section.

How to Run the Project

Clone or download the project directory.
Open the index.html file in your browser to view the main shopping page.
Click on items to add them to the cart.
Click the cart icon to view the cart sidebar and proceed to checkout.
The checkout page (payment.html) allows you to enter payment details with form validation.

Running Locally:

To view and test the project locally, simply:
Open the index.html in any web browser.
The site should be fully functional with cart interactions, product listings, and payment form validation.

Future Improvements

Implement a real backend for processing payments.
Add more dynamic product data (e.g., product descriptions, ratings, etc.).
Improve accessibility and mobile responsiveness.
Add a user login and account management system.
Enhance cart management (e.g., allowing users to update quantities and apply discounts).