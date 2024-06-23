console.log('<====================> Exercise 5 <====================>');

// How many products with an id of 123 beed sold?

const isSold = orders => orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0)

console.log(isSold(orders));