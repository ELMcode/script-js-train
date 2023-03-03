let budget=48
let price=47
let tax=3.76

const messageSuccess="Achat effectué !"
const messageFail="Fond insuffisant"

if (budget>=(price+tax)) {
    console.log(messageSuccess)
}

else {
    console.log(messageFail)
}

