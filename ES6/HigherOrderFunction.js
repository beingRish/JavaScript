// Higher Order Function

// When a function receives another function as an argument or a function returns another function as a output, so in that case that function will act as Higher Order Function.

function x(fn){
    fn();
}

function y(){
    console.log("Hello from y");
}

x(y);

// x is higher order function
// y is call back function

const data = [10, 20, 5, 30];

function cal_square(x){
    return x**2;
}

function cal_addByOne(y){
    return y+1;
}

const calculate = function(d, cal){
    const output = [];
    for(var i=0; i<d.length; i++){
        output.push(cal(d[i]));
    }
    return output;
}

console.log(calculate(data, cal_square));
console.log(calculate(data, cal_addByOne));