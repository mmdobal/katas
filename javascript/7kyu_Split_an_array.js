/*
Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };

split([obj1, obj2], 'prop');
// [[obj1], [obj2]]

Link: https://www.codewars.com/kata/550aea365951383698000727
*/


function split(arr, prop) {
  const result = [[], []];
  for (let i = 0; i < arr.length; i += 1) {
    arr[i][prop] ? result[0].push(arr[i]) : result[1].push(arr[i]);
  }
  return result;
}
