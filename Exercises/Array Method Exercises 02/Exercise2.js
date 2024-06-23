console.log('<====================> Exercise 2 <====================>');

// Create a new property on each order with the total price of items ordered.

const getTotalPrice = orders => orders.map(order => ({...order, orderTotal: order.items.reduce((acc, item)=> acc+item.price, 0)}))

console.log(getTotalPrice(orders));