/*
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

** Input: ** If you can read

** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

** Some notes **

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.

Link: https://www.codewars.com/kata/586538146b56991861000293
*/

function to_nato(words) {
  const result = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const nato = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];
  words.toLowerCase().split('').forEach((item) => {
    if (alphabet.indexOf(item) !== -1) {
      result.push(nato[alphabet.indexOf(item)]);
    }
    if ('!?.,;'.includes(item)) {
      result.push(item);
    }
  });
  return result.join(' ');
}
