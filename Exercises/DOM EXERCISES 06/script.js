console.log('<====================> Exercise 01 <====================>');

// Add a new row to the table with the details : 'Sean Reyes' (@Sreyes)

const newRow = document.createElement('tr');
['6', 'Sean', 'Reyes', '@sreyes'].forEach(colText => {
    const col = document.createElement('td');
    col.innerText = colText;
    newRow.appendChild(col);
});
document.querySelector('table')
    .appendChild(newRow);







console.log('<====================> Exercise 02 <====================>');

// Update Leona Dixon's handle to @dixonl

const getDixon = document.querySelector('.table').lastElementChild

console.log(getDixon)