/*

Link: https://www.codewars.com/kata/5853213063adbd1b9b0000be
*/

function streetFighterSelection(fighters, position, moves) {
  let posX = position[0];
  let posY = position[1];
  const result = [];
  moves.forEach((item) => {
    switch(item) {
			case 'up':
				if (posY === 1) {posY = 0};
				result.push(fighters[posY][posX]);
				break;
			case 'down':
				if (posY === 0) {posY = 1};
				result.push(fighters[posY][posX]);
				break;
			case 'right':
				posX === 5 ? posX = 0 : posX +=1;
				result.push(fighters[posY][posX]);
				break;
			case 'left':
				posX === 0 ? posX = 5 : posX -=1;
				result.push(fighters[posY][posX]);
				break;
    }
  });
  return result;
}
