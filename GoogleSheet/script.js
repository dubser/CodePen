// Script js pour lire un Google worksheet public avec fetch  sans oauth2 ni api key 

// Voir les résultats dans la console

async function lireGoogleSheetCSV(sheetId, sheetName) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erreur lors du chargement du CSV");

        const csvText = await response.text();
        const lignes = csvText.split("\n").map(ligne => ligne.split(",")); // Convertit en tableau

        console.log(lignes); // Affiche les données dans la console
    } catch (error) {
        console.error("Erreur:", error);
    }
}

// Remplace par l'ID de ton Google Sheet et le nom de la feuille
lireGoogleSheetCSV("1bPJvBFk6cj9jKfxIOB3RuCZOoHFy3vZAjTGBgAx6jFE", "Feuille 1");
