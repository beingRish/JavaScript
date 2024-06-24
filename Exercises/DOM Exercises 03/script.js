console.log('<====================> Exercise 1 <====================>');

// A new feature has beed added to the Pro plan: '24/7 Phone support'.
// Add this using JavaScript to the list features of the Pro plan.

const ul = document.querySelector('#pro-plan ul')
    .insertAdjacentHTML('beforeend', '<li>24/7 Phone support</li>')







console.log('<====================> Exercise 2 <====================>');

// To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
    
const basic = document.querySelector('#basic-plan');
const pro = document.querySelector('#pro-plan');
const parent = basic.parentNode;
parent.insertBefore(basic, pro);







console.log('<====================> Exercise 3 <====================>');

// To make the Pro plan hover a stranger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now'.

const proCTA = document.querySelector('#pro-plan button');
proCTA.innerText = 'Buy Now';
// proCTA.style.backgroundColor = '#007bff';
// proCTA.style.color = '#fff'

// or
proCTA.classList.add('btn-primary');
proCTA.classList.remove('btn-outline-primary');







console.log('<====================> Exercise 4 <====================>');

// There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.

// Update the basic and pro plan cards to reflect the new storage amount being offered.

const basicPlanStorage = document.querySelector('#basic-plan .storage-amount');
const proPlanStorage = document.querySelector('#pro-plan .storage-amount');

basicPlanStorage.innerText *= 1.5;
proPlanStorage.innerText *= 1.25;







console.log('<====================> Exercise 5 <====================>');

// You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plan.

// Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annualy).

document.querySelector('.container')
    .insertAdjacentHTML('afterBegin', `<label>
            Monthly
            <input id="monthlyPricing" type="radio" name="princing" value="monthly" checked>
        </label>
        <label>
            Annual
            <input id="annualPricing" type="radio" name="princing" value="annual">
        </label><br><br>
    `);

const pricing = {
    monthly : {
        basic: '10 / month',
        pro: '30 / month'
    },
    annual : {
        basic: '100 / year',
        pro: '300 / year'
    }
};

const chagePricing = event => {
    const selection = event.target.value;
    document.querySelector('#basic-plan .pricing').innerText = pricing[selection].basic;
    document.querySelector('#pro-plan .pricing').innerText = pricing[selection].pro;
};

Array.from(document.querySelectorAll('input[type="radio"]'))
    .forEach(radio => radio.addEventListener('change', chagePricing));