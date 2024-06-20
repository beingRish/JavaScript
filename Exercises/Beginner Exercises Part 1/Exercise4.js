// Write a JavaScript Program to get the current date.
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

console.log('<====================> Exercise 4 <====================>');

const formatData = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatData());