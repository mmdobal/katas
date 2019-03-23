/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

Link: https://www.codewars.com/kata/587e18b97a25e865530000d8
*/

function anagramCounter(wordsArray) {
  const newArray = [];
  wordsArray.forEach((item) => {
    newArray.push(item.split('').sort().join(''));
  });
  const count = {};
  newArray.forEach((i) => { count[i] = (count[i] || 0) + 1; });
  const counter = Object.keys(count).map(k => count[k]);
  const mapcounter = counter.map(x => (Math.pow(x - 1, 2) + (x - 1)) / 2);
  return mapcounter.reduce((a, b) => a + b, 0);
}
