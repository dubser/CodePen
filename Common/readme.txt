===================================
Structuré sous forme de classe
===================================
Classe dsply

// utilV1.js est la 1e version de libr util
// avec inclusions modernes de type 
// import export.
// 
===================================
Classe dsply
===================================
// On doit définir un div nommé dans le html 
// Evemple <div id="conteneur"></div>
// On doit dans le JS instancier un objet 

// Appel sans options (les valeurs par défaut s'appliquent)
const inst_1= new util.dsply("conteneur1");
// Appel avec options
const inst_0= new util.dsply("conteneur", {color :'red', width : '40vw'}); 

// Display crée un affichage a l'intérieur de balises 
// <div id="conteneur"></div> palcées dans le HTML.
//
// Valeurs utilisées si appel de fonction vide Display();
// Les defauts de la définition sont utilisés pour les 
// paramètres sans defauts les valeurs de l'objet cssVal
// sont utilisées.
//
// Si un objet vide est transmis a l'appel  Display({});
// alors les valeurs de l'objet cssVal sont utilisées.
//
// Si un objet non vide est transmis a l'appel  Display({....});
//
// donc populé par des Display({divId:"conteneur1",width : '81%', height : '76px'});
// Les valeurs non fournies provientront de l'objet cssDef
//
// inst_0.clrListWin("");
//Deux méthodes sont disponibles avec dsplay soit lister et clrListWin
// lister affiche le tecte dans la fenetre et s'appelle pa ex:
// inst_0.lister("Texte transmis");
// clrListWin vide la fenetre et s'appelle pa ex:
// inst_0.clrListWin("");





