const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const buyNowButton = document.getElementById('buy-now');
const addressForm = document.getElementById('address-form');
const addressDetailsForm = document.getElementById('address-details');
const viewOrdersButton = document.getElementById('view-orders');
const ordersModal = document.getElementById('orders-modal');
const orderItemsList = document.getElementById('order-items');
const closeOrdersButton = document.getElementById('close-orders');

// Display cart items on load
displayCartItems();

// Function to display cart items
function displayCartItems() {
    // Clear current cart display
    cartItemsList.innerHTML = '';

    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    // Create list items for each cart item
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price; // Calculate total price
    });

    // Update total price display
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Buy Now functionality
buyNowButton.addEventListener('click', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const address = localStorage.getItem('userAddress');
    if (address) {
        const useOldAddress = confirm('We have your saved address. Do you want to use it?');
        if (useOldAddress) {
            processPurchase();
        } else {
            addressForm.classList.remove('hidden');
        }
    } else {
        addressForm.classList.remove('hidden');
    }
});

// Address form submission
addressDetailsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    const userAddress = { name, address, phone };
    localStorage.setItem('userAddress', JSON.stringify(userAddress));

    addressForm.classList.add('hidden');

    processPurchase();
});

// Function to process the purchase
function processPurchase() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({ items: cartItems, date: new Date().toLocaleString() });
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Thank you for your purchase! Your order is being processed.');

    localStorage.removeItem('cartItems');
    cartItemsList.innerHTML = '';
    totalPriceElement.textContent = '0.00';
}

// Function to display previous orders
viewOrdersButton.addEventListener('click', displayOrders);
closeOrdersButton.addEventListener('click', () => {
    ordersModal.classList.add('hidden');
});

function displayOrders() {
    // Show the orders modal
    ordersModal.classList.remove('hidden'); // Remove the hidden class
    ordersModal.classList.add('show'); // Add the show class

    // Clear previous order items
    orderItemsList.innerHTML = '';

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders.length === 0) {
        orderItemsList.innerHTML = '<li>No orders found</li>';
    } else {
        orders.forEach((order, index) => {
            const orderListItem = document.createElement('li');
            const orderDetails = order.items.map(item => `${item.name} - $${item.price.toFixed(2)}`).join(', ');
            orderListItem.textContent = `Order ${index + 1} (${order.date}): ${orderDetails}`;
            orderItemsList.appendChild(orderListItem);
        });
    }
}
