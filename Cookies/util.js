// util.js est la 1e version de libr util
// gardée pour rester compatible avec les import
// classique de type   <script src="util1.js"></script>

// Retourne les Min:sec courante pour debugging. 

function getTstamp() {
    const now = new Date();
    const seconds = now.getSeconds(); 
    const min = now.getMinutes();
    const Tstamp = min + ":" + seconds+ " ";
    //console.log("printTimeStmp: "+ Tstamp);
    return(Tstamp);
    }

// Imprime du texte fourni en argument avec déroulement 
// dans la fenetre nommée ListWindow qui est un Div
// du Panneau de controle de type construit dans 
// TestCookie. CSS dans #ListWindow 
// data: Données a afficher divId: Nom du div 

function outListWin(data){
    const monDiv = document.getElementById("ListWindow");
    const texteDuDiv = monDiv.textContent;
    if (texteDuDiv!="")ListWindow.textContent=texteDuDiv+ "\n"+ data;
    if (texteDuDiv=="")ListWindow.textContent= data ;
    monDiv.scrollTop = monDiv.scrollHeight; 
}

// Vide lafenetre ListWindow

function clrListWin(){

document.getElementById("ListWindow").innerHTML = "" ;
}

