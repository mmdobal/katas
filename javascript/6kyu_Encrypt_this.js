/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

Link: https://www.codewars.com/kata/5848565e273af816fb000449
*/

let encryptThis = function (text) {
  if (text === '') return text;
  const result = [];
  const words = text.split(' ');
  words.forEach((word) => {
    const temp = word.split('');
    [temp[1], temp[temp.length - 1]] = [temp[temp.length - 1], temp[1]];
    temp[0] = temp[0].charCodeAt(0);
    result.push(temp.join(''));
  });
  return result.join(' ');
};
