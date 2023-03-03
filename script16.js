const one = [91, 66, 77, 84, 68];
const two = [91, 67, 0, 88, 98];

function compareArrays(one, two) {
  for (let i = 0; i < one.length; i++) {
    if (one[i] === two[i]) {
      console.log("Common element:", one[i]);
    }
  }
  return false;
}
compareArrays(one, two);
