console.log('<====================> Exercise 2 <====================>');

// Find out how many users have an IP address in a Class A network.
// For Class A network, first Octect should be in range of 1 to 128.
// https://en.wikipedia.org/wiki/Classful_network


const countClassANetwork = users => users.filter(({ip_address}) => ip_address.split('.')[0] < 128).length

console.log(countClassANetwork(users));