// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt() + 1));
  return correctedArray.join('');

}

console.log(myFunction('bgddrd'));

/* function myFunction(str) {
  let arr = [];
  let string = str;
  while (string.length) {
     const nextC = (string) => { return String.fromCharCode(string.charCodeAt(0) + 1) }
     arr.push(nextC(string));
  string = string.slice(1)
  }
  return arr.join('');
}
*/