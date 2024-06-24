console.log('<====================> Exercise 1 <====================>');

// Move the contents of the two paragraphs into one single <p> tag. Ensure there are no empty <p> tags left on the page.

const paragraphs = document.querySelectorAll('p');
paragraphs[1].insertAdjacentHTML('afterBegin', paragraphs[0].innerText);
paragraphs[0].remove();







console.log('<====================> Exercise 2 <====================>');

// Reduce the font-size of the paragraph text to be half the size of the menu text.

const menuItem = document.querySelector('.menu ul li');
const menuItemFontSize = parseInt(window.getComputedStyle(menuItem).getPropertyValue('font-size'));
document.querySelector('p').style['font-size'] = `${menuItemFontSize / 2}px`;
console.log(menuItemFontSize);







console.log('====================> Exercise 3 <====================>')

// Move the 'Services' menu item to be before the 'About' menu item (after Home);

const services = document.querySelector('.menu ul li:nth-child(3)');
const about = document.querySelector('.menu ul li:nth-child(2)');
about.insertAdjacentElement('beforebegin', services);







console.log('====================> Exercise 4 <====================>')

// Create the following new entries in the menu: FAQs, Pricing

const menu = document.querySelector('.menu ul');
const faqElement = document.createElement('li');
const pricingElement = document.createElement('li');

faqElement.innerText = 'FAQs';
pricingElement.innerText = 'Pricing';

menu.appendChild(faqElement);
menu.appendChild(pricingElement);







console.log('====================> Exercise 5 <====================>')

// Add a hover effect to the menu items so when the user hovers over them the background and font-size change. (Must be done with JavaScript).

const hoverEffect = event => {
    const elem = event.target;
    elem.style['background-color'] = '#f2f2f2';
    elem.style['font-size'] = '20px';
};

const normalEffect = event => {
    const elem = event.target;
    elem.style['background-color'] = '#fff';
    elem.style['font-size'] = '16px';
};

Array.from(document.querySelectorAll('.menu ul li'))
    .forEach(elem => {
        elem.addEventListener('mouseover', hoverEffect);
        elem.addEventListener('mouseleave', normalEffect);
    });