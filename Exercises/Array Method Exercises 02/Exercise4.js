console.log('<====================> Exercise 4 <====================>');

// Has the customer with ID '123' made any orders?

const anyOrders = orders => orders.some(order => order.customerId === '123')

console.log(anyOrders(orders));