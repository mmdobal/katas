/*
Link: https://www.codewars.com/kata/55466989aeecab5aac00003e
*/

function sqInRect(lng, wdth) {
  if (lng === wdth) { 
    return null; 
  }
  let result = [];
  const rect = function (lng, wdth) {
    if (lng === 0 || wdth === 0) return;
    const min = Math.min(lng, wdth);
    let max = Math.max(lng, wdth);
    result.push(min);
    max -= min;
    rect(max, min);
  };
  rect(lng, wdth);
  return result;
}
