const orders = [
    {
        orderId: '123',
        customerId: '123',
        deliveryDate: '01-01-2020',
        delivered: true,
        items: [
            {
                productId: '123', 
                price: 55
            },
            {
                productId: '234', 
                price: 30
            },
        ]
    },
    {
        orderId: '234',
        customerId: '234',
        deliveryDate: '01-02-2020',
        delivered: false,
        items: [
            {
                productId: '234', 
                price: 30
            },
        ]
    },
    {
        orderId: '345',
        customerId: '234',
        deliveryDate: '05-01-2020',
        delivered: true,
        items: [
            {
                productId: '567', 
                price: 30
            },
            {
                productId: '678', 
                price: 80
            },
        ]
    },
    {
        orderId: '456',
        customerId: '345',
        deliveryDate: '12-01-2020',
        delivered: true,
        items: [
            {
                productId: '789', 
                price: 12
            },
            {
                productId: '890', 
                price: 90
            },
        ]
    },
    {
        orderId: '578',
        customerId: '456',
        deliveryDate: '12-01-2020',
        delivered: true,
        items: [
            {
                productId: '901', 
                price: 43
            },
            {
                productId: '123', 
                price: 55
            },
        ]
    }, 
]


console.log('<====================> Exercise 1 <====================>');

// Get a list of the orders for the customer with the ID 234 that have not been delivered.

const getList = orders => orders.filter(order => order.orderId === '234' && !order.delivered)

console.log(getList(orders));