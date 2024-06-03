// Template Literals or Template String

// Template Strings use back-ticks (` `) rather than the sinle of double quotes we're used to with regular strings.


let productName = "Laptop";
let quantity = 2;
let status = "pending";

// ES5

let productStatus = "Status of the product is ";
productStatus += (status === 'delivered') ? 'green' : 'red';


let description = "I have ordered " + quantity + " " + productName + " from \"amazon\" last week " + productStatus;
console.log(description);

// ES6

function estimatedDelivery(){
    return "01-05-2024"
}

let productStat = `Status of the product is ${status === 'delivered' ? 'green' : 'red'}`;


let description2 = `I have 
ordered ${quantity} ${productName} from "amazon" last week
and estimated delivery for this product is ${estimatedDelivery()} and following is the status : ${productStat}`;
console.log(description2);