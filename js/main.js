const log = document.getElementById("log");
const startBtn = document.getElementById("iniciativa");

startBtn.addEventListener("click", combate);

//STATS

function combate() {
  let vida = 20;
  let pgGoblin = 30;
  let fuerza = parseInt (prompt ("Marca tu fuerza del 1 al 5", 0));
  console.log (fuerza);


//dados
function espada() {
  return Math.floor((Math.random() * 6) + 1 ) + (fuerza);//<==============(fuerza);
}
function daga() {
  return Math.floor(Math.random() * 8) + 1;
}
//jugar
  while (vida > 0 && pgGoblin > 0) {
    const playerDamage = espada () ;
    const goblinDamage = daga ();

    pgGoblin -= playerDamage;
    vida -= goblinDamage;

    logMessage(`Has atacado al goblin y le has quitado ${playerDamage} PG.`);
    console.log ("Has atacado al goblin y le has quitado " + playerDamage + "PG")
    logMessage(`El goblin te ha atacado y te ha quitado ${goblinDamage} PG.`);
    console.log ("El goblin te ha atacado y te ha quitado " + goblinDamage + "PG")

    if (vida <= 0) {
      logMessage("- JAJAJA!! Debiles humanos. - Tu pierdes");
      console.log ("YOU LOSE")
    } else if (pgGoblin <= 0) {
      logMessage("Derrotaste al Goblin");
      console.log ("YOU WIN")
    }
  }
}

function logMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}






