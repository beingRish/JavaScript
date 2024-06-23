console.log('<====================> Exercise 3 <====================>');

// Have all the orders been delivered?

const AllDelivered = orders => orders.every(order => order.delivered)

console.log(AllDelivered(orders));