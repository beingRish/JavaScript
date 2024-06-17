// Callback Function?

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some task...



// Higher Order Function(HOF)

// A higher order function is a function that takes a function as an argument, or returns a function

console.log('==================Synchronous Callback Function==================');
function task1(message){
    console.log(message);
}

function task2(callback){
    console.log('task2 is in progress');
    callback();
}

task2(() => task1('hello'));


console.log('==================Asynchronous Callback Function==================');
// Assynchronous Callback function

function sentNotification(){
    console.log('Your profile is shortlisted for the interview');
}

function applyForJob(callback){
    console.log('Your Resume has uploaded');
    console.log('Your Request is in progress........');

    setTimeout(function(){
        callback();
    }, 5000)
}

applyForJob(sentNotification);

console.log('Some other stuff in progress.........');