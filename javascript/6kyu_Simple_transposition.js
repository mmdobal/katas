/*
Link: https://www.codewars.com/kata/57a153e872292d7c030009d4
*/

function simpleTransposition(text) {
  let row1 = '';
  let row2 = '';
  for (let i = 0; i < text.length; i += 1) {
    if (i % 2 === 0) {
      row1 += text[i];
    } else if (i % 2 === 1) {
      row2 += text[i];
    }
  }
  return row1 + row2;
}
