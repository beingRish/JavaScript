// arranging words by their length in a sentence.

const str = "react is a library";

// output = "a is react library"

// split -> convert string to array
// sort -> sort the array
// join -> convert array to string

function reverseString(data){
    const dataAsArray = data.split(" ");

    dataAsArray.sort((a, b)=>{
        // ASC
        // return a.length - b.length

        // DESC
        return b.length - a.length
    })

    return dataAsArray.join(" ");
}

console.log(reverseString(str))