/*
You have been recruited by an unknown organization for your cipher encrypting/decrypting skills.
Being new to the organization they decide to test your skills.
Your first test is to write an algorithm that encrypts the given string in the following steps.

The first step of the encryption is a standard ROT13 cipher. This is a special case of the caesar cipher where the letter is encrypted with its key that is thirteen letters down the alphabet,
i.e. A => N, B => O, C => P, etc..

Part two of the encryption is to take the ROT13 output and replace each letter with its exact opposite. A => Z, B => Y, C => X.
The return value of this should be the encrypted message.

Do not worry about capitalization or punctuation. All encrypted messages should be lower case and punctuation free.
As an example, the string "welcome to our organization" should return "qibkyai ty ysv yvgmzenmteyz".

Link: https://www.codewars.com/kata/56fb3cde26cc99c2fd000009
*/

function encrypter(string) {
  const result = [];
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'nopqrstuvwxyzabcdefghijklm';
  const reverse = alpha.split('').reverse().join('');
  for (let i = 0; i < string.length; i += 1) {
    if (alpha.includes(string[i])) {
      const index = alpha.indexOf(string[i]);
      const rot13 = cipher[index];
      const rev = reverse[alpha.indexOf(rot13)];
      result.push([rev]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join('');
}
