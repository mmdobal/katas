/*
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.

Link: https://www.codewars.com/kata/5672f4e3404d0609ec00000a
*/

const frame = (text, char) => {
  let longest = text.reduce(function (a, b) { return a.length > b.length ? a : b; });
  let frame = char.repeat(longest.length + 4);
  let newText = text.map(x => char + ' ' + x + ' '.repeat(longest.length - x.length + 1) + char + '\n');

  return frame +'\n'+ newText.join('') + frame;
}