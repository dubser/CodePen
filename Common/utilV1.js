
//*************************************************************************
// Notes
//*************************************************************************
// V1.0 31 Déc 2024 Code pleinement vérifié voir usage dans readme.txt





//*************************************************************************
// Code de Classe
//*************************************************************************


// Appel du constructeur avec des options
//maFonction(divId, { color: 'red', option2: "Option B" });
// Sans options (les valeurs par défaut s'appliquent)
//maFonction(divId);

export class dsply {
   
    constructor(divId,options={}){
        this.divId = divId;
        this.options=options;
        //console.log("Constructeur....divId: " + divId );
        this.putCss({ }); // Appliquer le css par defaut
    }  

      // variables de classe.

    static cssDef = {
        text:'Texte_par_defaut',
        color :'black',
        backgroundColor :'#b8b3b3',
        padding : '10px',
        margin : '10px',
        border : '1px solid black',
        width : '80vw',
        height : '70px',
        borderRadius :'5px',
        overflow : 'auto',
        fontWeight: 'bold',
        fontSize :'13px',
        fontFamily :'Times New Roman',
        whiteSpace: 'pre-line', 
    }
  
    static cssParent = {
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        flexDirection: "column",
}

// Méthodes
    putCss(options){

 //     cssAll est le merge des valeurs css defaut cssDef
 //     et des optionsvpassées en argument et priorisées.  

        var cssAll=  {...dsply.cssDef,...this.options};

//      monDiv est l'objet courant HTML dont le ID est dans
//      divId 

        const monDiv = document.getElementById(this.divId);

//      Parent est l'objet parent de nomDiv courant HTML 
//      englobant l'objet courant dont l'ID est dans divId 

        const parent = monDiv.parentElement;
    

//******************************************************************

for (const cle in cssAll) {
    if (cssAll.hasOwnProperty(cle)) { // Important pour éviter les propriétés héritées
     let cmdStr= "monDiv.style."+cle+ " = cssAll[cle]";
        eval(cmdStr);
    }
  }

  for (const cle in dsply.cssParent) {
    if (dsply.cssParent.hasOwnProperty(cle)) { // Important pour éviter les propriétés héritées
     let cmdStr= "parent.style."+cle+ " = dsply.cssParent[cle]";     
     let tmp= parent.style;
            eval(cmdStr);
    }
  }

}

// Vide la fenetre 
clrListWin(options){
        document.getElementById(this.divId).innerHTML = " " ;
        //console.log("Clear du window");
        }

// Ajoute du texte text a la fenetre.
lister(text){
    //console.log("Application du text a la fenetre.",this.divId);
    const monDiv = document.getElementById(this.divId);
    var texteDuDiv = monDiv.textContent;
    
    { texteDuDiv=texteDuDiv+ "\n"+ text;}
   
    document.getElementById(this.divId).textContent= texteDuDiv;

    monDiv.scrollTop = monDiv.scrollHeight; 
 }

}



