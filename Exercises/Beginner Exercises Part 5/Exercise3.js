// Write a JavaScript function to convert an amount to coins.

// Example input : 46 and possible coins 25, 10, 5, 2, 1

// output : 25, 10, 10, 1

console.log('<====================> Exercise 3 <====================>');

const countCoins = (money, coins) => {
    let result = [];
    for(let coin of coins){
        while(money >= coin){
            result.push(coin);
            money-=coin;
        }
    }
    return result;
}

console.log(countCoins(46, [25, 10, 5, 2, 1]));