console.log('<====================> Exercise 3 <====================>');

// Find the position in the array of the first  user object that has a Class B IP address

// For Class B IP Address, first Octect should have in range of 128 to 192

const findPosition = users => users.findIndex(({ip_address}) => {
    const firstOctect = ip_address.split('.')[0];
    return firstOctect >= 128 && firstOctect < 192;
});

console.log(findPosition(users));