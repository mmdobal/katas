/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Link: https://www.codewars.com/kata/530e15517bc88ac656000716
*/

function rot13(message) {
  const result = [];
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const Alpha = alpha.toUpperCase();
  for (let i = 0; i < message.length; i += 1) {
    if (alpha.includes(message[i])) {
      const index = alpha.indexOf(message[i]);
      result.push(alpha.repeat(2)[index + 13]);
    } else if (Alpha.includes(message[i])) {
      const index = Alpha.indexOf(message[i]);
      result.push(Alpha.repeat(2)[index + 13]);
    } else {
      result.push(message[i]);
    }
  }
  return result.join('');
}
