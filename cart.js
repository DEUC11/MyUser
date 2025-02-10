// Function to add a product to the cart
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        name: productName,
        price: price,
        quantity: 1
    };

    // Check if the product is already in the cart
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if product is already in cart
    } else {
        cart.push(product);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}

// Function to display the cart contents (used in cart.html)
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.querySelector('#cart-table tbody');
    let total = 0;

    // Clear previous cart items
    cartTable.innerHTML = '';

    // Display the cart items
    cart.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartTable.appendChild(row);
        total += item.price * item.quantity;
    });

    // Display the total cost
    document.querySelector('#cart-total').textContent = `$${total.toFixed(2)}`;
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName); // Remove the item with the matching name
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Re-render the cart after removal
}
        // Function to add a product to the cart
        function addToCart(productName, price) {
            // Store the product in localStorage (to persist the data across pages)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const product = {
                name: productName,
                price: price,
                quantity: 1
            };

            // Check if the product is already in the cart
            let existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increase quantity if product is already in cart
            } else {
                cart.push(product);
            }

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirect to the cart page
            window.location.href = 'cart.html';
        }