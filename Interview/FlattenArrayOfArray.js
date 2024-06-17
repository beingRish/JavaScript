// Flatten Array of Array

let arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, 11]], 12, 13]

// output requirement 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

// Approach
// 1) Recursive function
// 2) Array

let output = [];

function flatten(){
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            // recursive call
           flatten(arr[i]);
        }
        else{
            output.push(arr[i]) ;
        }
    }
    return output;
}

console.log(flatten(arr));