// Matching Twitter Handle and extract the twitter handle name using Regular Expression Pattern.

console.log('<====================> Exercise 26 <====================>');

const text1 = '@rishabhsingh'

const regex1 = /^@(\w+)$/g

console.log(regex1.exec(text1));