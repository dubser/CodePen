// Écriture du code fourni par
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json

// Les explications sur le code ci bas sont données par..... 
// https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Async_JS/Promises
// Avec Fetch la promise et l'exécutor etant créée par Fetch, seuls les callback effectués
// ont a etre définis.

console.log("PromiseJson.js running");

function tstJson(){
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );



  fetchPromise
    .then((reponse) => {            // reponse est populé par le retour de la promesse                              
      return  reponse.json();       // appelée par fetch.
    })
    .then((jsn) => {                // jsn est populé par le retour de la promesse
       console.log(jsn[0].name);    // créée par return  reponse.json(); précédent
      console.log(jsn[0].name);     // jsn est un objet...array
      outListWin(jsn[0].name);
    
    });
    

  }