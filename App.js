document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.querySelector('.sidebar-close');
    const checkoutButton = document.querySelector('.checkout-btn');
  
    let cartItems = [];
    let totalAmount = 0;
  
    // Add to Cart button functionality (combined loops)
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const productElement = button.closest('.product-details') || button.closest('.card');
        const item = {
          name: productElement.querySelector('.card-title')?.textContent.trim() || productElement.querySelector('#productName').textContent.trim(),
          price: parseFloat(productElement.querySelector('.price')?.textContent.slice(1) || productElement.querySelector('#productPrice').textContent.slice(1)),
          quantity: 1,
        };
  
        const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          cartItems.push(item); 
  
        }
  
        totalAmount += item.price;
        updateCartUI();
      });
    });


    // Update the cart UI
    function updateCartUI() {
        updateCartItemCount(cartItems.length);
        updateCartItemList();
        updateCartTotal();
    }

    // Update the cart item count in the cart icon
    function updateCartItemCount(count) {
        cartItemCount.textContent = count;
    }

    // Update the cart item list in the sidebar
    function updateCartItemList() {
        cartItemList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = `
                <span>(${item.quantity}x) ${item.name}</span>
                <span class="cart-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                    <button class="remove-btn" data-index="${index}">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </span>
            `;
            cartItemList.appendChild(cartItem);
        });

        // Add functionality to the remove buttons
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const index = event.target.closest('.remove-btn').dataset.index;
                removeItemFromCart(index);
            });
        });
    }

    // Remove an item from the cart
    function removeItemFromCart(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        totalAmount -= removedItem.price * removedItem.quantity;
        updateCartUI();
    }

    // Update the cart total
    function updateCartTotal() {
        cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Toggle the cart sidebar
    cartIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close the sidebar
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Checkout button functionality
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add items to your cart before checking out.');
        } else {
            // Redirect to the payment gateway page
            window.location.href = 'payment.html';
        }
    });
});


