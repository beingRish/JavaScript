// Closures

// In JavaScript, a closure is a function that references the variables in the outer scope from its inner scope.

// The closure preserves the outer scope inside its inner scope even after outer function is returned.



function counter(){
    let count = 0;

    function calculate(){
        return count+=1;
    }
    return calculate;
}

let result = counter();
console.log(result());
console.log(result());
console.log(result());

// IIFE(Immediately Invoked Function Expression)

// An IIFE is a JavaScript function that runs as soon as it is defined

// It is a design pattern which is also known as a Self-Executing Anonymous Function.

(function test(){
    console.log('test');
})()


let products = document.getElementsByClassName("item");

let cartCounter = (function(){
    let count = 0;
    return {
        increment: () => count += 1,
        decrement: () => count -= 1,
        totalCount: () => count,
    }
})()

function updateCart(){
    document.getElementById('count').innerHTML = cartCounter.totalCount();
}

for(let i=0; i<products.length; i++){
    products[i].addEventListener('click', function(){

        console.log(this.className.indexOf('selected'));
        if(this.className.indexOf('selected') < 0){
            this.className += ' selected';
            cartCounter.increment();
            updateCart();
        }else{
            this.className = this.className.replace('selected', '');
            cartCounter.decrement();
            updateCart();
        }
    });
}