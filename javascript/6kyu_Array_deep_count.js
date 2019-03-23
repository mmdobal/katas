/*
Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7

Link: https://www.codewars.com/kata/596f72bbe7cd7296d1000029
*/

function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
    count += 1;
  }
  return count;
}
