console.log('<====================> Exercise 1 <====================>');

// Add a label to each of the input fields: username, password, confirm password

document.getElementById('username')
    .insertAdjacentHTML('beforebegin', '<label for="username">Username: </label>');

document.getElementById('password')
    .insertAdjacentHTML('beforebegin', '<label for="passwird">Password: </label>');

document.getElementById('confirmPassword')
    .insertAdjacentHTML('beforebegin', '<label for="confirmPassword">Confirm Password: </label>');







console.log('<====================> Exercise 2 <====================>');

// Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.

const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
    if (event.target.value === '' && !errorElement.length) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
    }

    if (errorElement && event.target.value !== '') {
        errorElement.forEach(elem => elem.remove());
    }
};

document.getElementById('username')
    .addEventListener('blur', checkInput)

document.getElementById('password')
    .addEventListener('blur', checkInput)

document.getElementById('confirmPassword')
    .addEventListener('blur', checkInput)







console.log('<====================> Exercise 3 <====================>');

// Add a further validation to check if the user input in the password and confirm password inputs match. Show on error message if they do not.

document.getElementById('confirmPassword')
    .addEventListener('blur', event => {
        if (event.target.value != document.getElementById('password').value) {
            event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords should Match</span>');
        }
    });







console.log('<====================> Exercise 4 <====================>');

// Ensure the 'Register' button is disabled until the user has entered valid data into all the input fields. Once they have, the registeration button should then be enabled.

const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
document.getElementById('registrationForm')
    .addEventListener('change', event => {
        const formIsFilled = Array.from(document.querySelectorAll('input'))
            .every(input => input.value);
        if(formIsFilled)
            btn.removeAttribute('disabled');
    })







console.log('<====================> Exercise 5 <====================>');

// When the user clicks the 'Register' button, a message should be displayed informing them a successful user registeration.

const form = document.getElementById('registrationForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.innerText = 'User registered successfully';
    form.prepend(alert);
});