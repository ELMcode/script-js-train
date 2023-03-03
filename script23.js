let number = 4;

function testAgain() {
  const text = `voici une template string dans une fonction ${number} !`;
  console.log(text);
}

testAgain();

// arrow function version
const testAgain2 = () => {
  const text2 = `voici une template string dans une arrow function ${number} !`;
  console.log(text2);
};

testAgain2();
