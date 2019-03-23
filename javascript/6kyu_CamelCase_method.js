/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Link: https://www.codewars.com/kata/587731fda577b3d1b0001196
*/

String.prototype.camelCase = function () {
  let str = '';
  this.split(' ').forEach((i) => {
      str += i.charAt(0).toUpperCase() + i.slice(1);
    });
  return str;
};
