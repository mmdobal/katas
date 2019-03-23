/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

Link: https://www.codewars.com/kata/5267faf57526ea542e0007fb
*/

function sep(num) {
    return num.toString().split('.');
  }
  
  Math.round = function(number) {
    let num = sep(number);
    if (num.length === 1) {
      return Number(num)}
    if (num[1][0] >= 5) {
      return (Number(num[0]) + 1)
    }
    return Number(num[0]);
  };
  
  Math.ceil = function(number) {
    let num = sep(number);
    if (num.length === 1) {
      return Number(num[0]);
    }
    return Number(num[0]) + 1;
  };
  
  Math.floor = function(number) {
    let num = sep(number);
    return Number(num[0]);
  };