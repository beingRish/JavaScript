// Debounce Function

// Debounce function basically force a function to wait a certain amount of time before running it again.

console.log('=================Debounce Function====================');
const ele = document.querySelector("input");

function outcome(data){
    console.log("data received from server", data);
}

// without debounce
// ele.addEventListener("keyup", outcome);

// with debounce
function hofDebounce(func, timeout){
    let timer;
    return function(...args){
        if(timer)
        clearTimeout(timer);
        timer = setTimeout(() => func(args), timeout);
    }
}

const result = hofDebounce(outcome, 1000)

ele.addEventListener("keyup", e => result(e.target.value));