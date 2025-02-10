// Function to filter orders based on the selected tab
function filterOrders(status) {
    const allOrders = document.querySelectorAll('.order-item'); // Get all order items
    const orderTabs = document.querySelectorAll('.order-tab');  // Get all tabs

    // Loop through each tab to remove the 'active' class
    orderTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    const activeTab = document.querySelector(`.order-tab[onclick="filterOrders('${status}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Loop through each order item and toggle visibility based on the status
    allOrders.forEach(order => {
        const orderStatus = order.getAttribute('data-status');
        
        if (status === 'all' || orderStatus === status) {
            order.style.display = 'block'; // Show order
        } else {
            order.style.display = 'none'; // Hide order
        }
    });
}

// Initially, show all orders
document.addEventListener('DOMContentLoaded', function () {
    filterOrders('all');
});
