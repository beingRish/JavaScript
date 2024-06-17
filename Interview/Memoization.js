                    // Memoization

// Memoization an optimization technique that can help make heavy computation processes more efficient.

// It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.


                    // Importance of Memoization

// It is an optimization technique that increases performance by caching results of function calls. This reduces execution time and increases CPU performance.

// It should be a Pure Function (whic always returns same output for same input - no sideEffect)


                    // Concepts you should know:

// Higher Order Function : A high order function accepts another function as an argument or returns a function as its output.

// Closures : When your inner function remember the scope of your outer function even after it has completed its execution.

function add(...data){
    return data.reduce((total, curr) => total+curr);
}

const memo = (func) => {
    let cache = {};
    return function(...args){
        const keys = JSON.stringify(args);
        if(cache[keys]){
            console.log(cache);
            console.log('return result from cache');
            return cache[keys];
        }
        else{
            console.log('Calculating the result');
            const result = func(...args);

            cache[keys] = result;
            return result;
        }
    }
}

const calculate = memo(add);

console.log(calculate(10, 20, 40));
console.log(calculate(10, 20, 40));