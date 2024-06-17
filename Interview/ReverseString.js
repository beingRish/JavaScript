// input -> I love JavaScript
// output -> I evol tpircSavaJ

// 1) split -> string to Array
// 2) reverse -> reverse a string
// 3) join -> array to string

const input = "I love JavaScript"

function ReverseString(data){
    const arrayInput = data.split(" ");
    const result = arrayInput.map(d => {
        return d.split("").reverse().join("");
    })
    console.log(result);
    return result.join(" ");
}

ReverseString(input);