// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add item to cart and save to localStorage
function addToCart(event) {
    const coffeeCard = event.target.closest('.coffee-card');
    const coffeeName = coffeeCard.dataset.name;
    const coffeePrice = parseFloat(coffeeCard.dataset.price);

    // Get existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart array
    cartItems.push({ name: coffeeName, price: coffeePrice });

    // Save the updated cart array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`${coffeeName} added to cart!`);
}

// Navigate to cart page
// document.getElementById('go-to-cart').addEventListener('click', () => {
//     window.location.href = 'cart.html'; // Redirect to cart page
// });
