// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {

    return b.toLowerCase().split(a).length - 1;
}

console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
