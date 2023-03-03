const hours = "15H35";
const phrase = ", l'heure de se coucher";
const hoursSleep = { heureSleep: 21, heureWake: 7 };

function test(hours, phrase) {
  const message = `il est ${hours}, c'est ${phrase} ! ce soir n'oublie pas de dormir à ${hoursSleep.heureSleep}`;
  console.log(message);
}

test(hours, phrase);
