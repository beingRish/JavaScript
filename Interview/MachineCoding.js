// Count Duplicate Elements in Array

// input
const items = ['a', 'b', 'c', 'a', 'b', 'b', 'c', 'd'];

// output {a:2, b:3, d:1}

function countDuplicates(data){
    const output = {};
    // logic
    data.map(d => {
        output[d] = (output[d] || 0) + 1;
    })
    return output;
}

console.log(countDuplicates(items));