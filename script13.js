function pairOrNot(number){
    if(number%2===0){
        console.log("Ce nombre est pair.")
    }
    else{
        console.log("Ce nombre est impair.")
    }
}
pairOrNot(2350);


function evenOrOdd(number){
    if(number%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
evenOrOdd();



function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total

    

    function makeNegative(num) {
        if ( num > 0 ) {
              return -num;
          }
          else {
              return num;
          }
      }