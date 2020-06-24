var cognomi = ["Benucci","D\'angelo", "Betti", "Fattorini", "Ciolfi", "Ermini"];

document.getElementById("send").addEventListener("click", function () {
  var cognomiUser = document.getElementById("cognome").value;
  var cognomiPosition = document.getElementById("cognomiPosition");
  var cognomiUpper = cognomiUser.charAt(0).toUpperCase() + cognomiUser.slice(1);
  var lastCognome = 0;

  if (cognomi.indexOf(cognomiUpper) == -1) {
    cognomi.push(cognomiUpper);
    cognomi.sort();
    lastCognome = cognomi.indexOf(cognomiUpper) + 1;
    cognomiPosition.innerHTML = "Il tuo cognome è stato aggiunto correttamente e si trova al: " + lastCognome + "° posto.";
  } else {
    cognomi.sort();
    lastCognome = cognomi.indexOf(cognomiUpper) + 1;
    cognomiPosition.innerHTML = "Il tuo cognome esiste già e si trova al: " + lastCognome + "° posto.";
  }

});
