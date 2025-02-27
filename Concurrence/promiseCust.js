
// fonction setTimout teste l'action d'une fonction
// avec délais. Dès l'appel de FonctionLente SP est différé
// et la suite du code est exécuté pour après ms msecondes
// la fonction SP est exécutée.
// Exemple de déclenchement en chaine de fonctions asynchrones

console.log("PromiseCust.js running");
console.log(getTstamp);

function fonctionLente(tempsAttente,Id) {
  console.log(getTstamp()+"Démarrage de Fonction Lente #" + Id);
  outListWin(getTstamp()+"Démarrage de Fonction Lente #" + Id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simuler une opération longue
      const resultat = getTstamp()+'Le résultat après ' + tempsAttente + 'ms'+
      " Id "+ Id;
      resolve(resultat); // Résoudre la promesse avec le résultat
      reject(resultat);
    }, tempsAttente);
  });
}

function fonctionRapide(Id) {
  console.log(getTstamp()+"Démarrage de Fonction Rapide #" + Id);
  outListWin(getTstamp()+"Démarrage de Fonction Rapide #" + Id);

  return new Promise((resolve, reject) => {
      // Simuler une opération 
      const resultat = getTstamp()+'Résultat de FonctRapide ' +
      " Id "+ Id;
      resolve(resultat); // Résoudre la promesse avec le résultat
      reject(resultat);
    });
}

function tstCust(){
// Utilisation :
fonctionLente(2000,1) 

  .then(resultat => {
    console.log(getTstamp()+"1e then " + resultat);
    outListWin(getTstamp()+"1e then " + resultat);
    return fonctionLente(3000,2);
  })
  .then(resultat=> {
    console.log(getTstamp()+"2e then " +resultat);
    outListWin(getTstamp()+"2e then " +resultat);
    return fonctionRapide(3);
  })
  .then(resultat=> {
    console.log(getTstamp()+"3e then " +resultat);
    outListWin(getTstamp()+"3e then " +resultat);
  })

  .catch(error => {
    console.log(getTstamp()+".then error");
    outListWin(getTstamp()+".then error");
    console.error(error);
    
  });
}
