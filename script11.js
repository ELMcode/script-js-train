const arrayTry = [87, 90, 45, 97, 31, 84, 87];
const cible = 50;

function findNumber(arrayTry, cible) {
  for (let i = 0; i < arrayTry.length; i++) {
    if (arrayTry[i] === cible) {
      console.log("cible detecté: " + cible);
      break;
    } else {
      console.log("a");
    }
  }
}

findNumber(arrayTry, cible);
