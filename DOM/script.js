
let heading = document.querySelector('h2');
console.dir(heading)
heading.innerText += " from Apna College Students"

let boxes = document.querySelectorAll('.box');

let idx = 1;
for(box of boxes){
    box.innerText = `new unique value ${idx}`;
    idx++;
}

// boxes[0].innerText = 'Rishabh';
// boxes[1].innerText = 'Ritik';
// boxes[2].innerHTML = 'Vishwjeet';
