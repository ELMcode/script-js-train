"use strict";


function subscription(value) {
const mail="Your email address is: " + value;
return mail;
}


const message=subscription("amine.el591@gmail.com" );
console.log(message);

function display(first, second,third) {
console.log(first+second+third);
}
display("duck ", "duck ", "goose ");


function showWinners(first, second) {
console.log("1st: " + first);
console.log("2nd: " + second);
}
showWinners("Alice", "Theo");