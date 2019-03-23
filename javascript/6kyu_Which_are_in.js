/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Link: https://www.codewars.com/kata/550554fd08b86f84fe000a58
*/

function inArray(array1, array2) {
    let arr = [];
    array2.forEach(function(i) {
      array1.forEach(function(j) {
        if (i.includes(j) && arr.indexOf(j) === -1) {
        arr.push(j);
        };
      });
    });
    return arr. sort();;
}