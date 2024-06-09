// Function Borrowing

// Function Borrowing allows us to use the methods of one object onto the different object without having to make a copy of that method.

getFullName = function(city, profile){
    console.log(this);
    console.log(`${this.firstName} ${this.lastName} and city is ${city} and profile is ${profile}`);
}

const employee = {
    firstName: 'Rishabh',
    lastName: 'Singh',
}

const customer = {
    firstName: 'Ritik',
    lastName: 'Kumar',
}

// getFullName.call(customer, 'Delhi', 'Instructor')
// getFullName.apply(customer, ['Goa', 'Artist'])    
// getFullName.apply(employee, ['Pune', 'Developer'])    

// const handler = getFullName.bind(customer);
// handler('Goa', 'Instructor');
// handler('Goa', 'Instructor');
// handler('Goa', 'Instructor');

const obj = document.getElementById('btn');
obj.addEventListener('click', getFullName.bind(customer, 'Patna', 'developer'));