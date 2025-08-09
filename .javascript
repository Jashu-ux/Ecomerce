// Cart data and function to update cart count
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartList = document.getElementById('cart-list');

// Function to update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Function to add item to the cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    displayCart();
}

// Function to display cart items
function displayCart() {
    cartList.innerHTML = ''; // Clear cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Event listener for Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
        
        const product = { id: productId, name: productName, price: productPrice };
        addToCart(product);
    });
});
