/*
Implement the Polybius square cipher.

Replace every letter with a two digit number. The first digit is the row number, and the second digit is the column number of following square. Letters 'I' and 'J' are both 24 in this cipher:

    1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z

Input will be valid (only spaces and uppercase letters from A to Z), so no need to validate them.

Link: https://www.codewars.com/kata/542a823c909c97da4500055e
*/

function polybius (text) {
  const grid = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'IJ', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']];
  const find = (item) => {
    let number = '';
    if (item === ' ') {
      number += item;
    }
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        if (grid[i][j].includes(item)) {
          let n1 = i + 1;
          let n2 = j + 1;
          number += n1.toString() + n2.toString();
        }
      }
    }
    return number;
  };
  return text.split('').map(letter => find(letter)).join('');
}
