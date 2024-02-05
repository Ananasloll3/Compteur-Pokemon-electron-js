
window.addEventListener('DOMContentLoaded', () => {
    const cheminDuFichier = "../save/pokemon.sav";
    const selectMain = document.getElementById("liste-choix-pokemon");
    
    // Utiliser Fetch pour charger le fichier
    fetch(cheminDuFichier)
      .then(response => response.text())
      .then(data => {
        // Traitement du fichier après la réussite du chargement
        var contenuDuFichier = data;
    
        // Boucle pour traiter chaque ligne du fichier
        contenuDuFichier.split('\n').forEach((ligne) => {
          var nouveauPokemon = document.createElement('option');
          nouveauPokemon.value = ligne;
          nouveauPokemon.text = ligne;
          selectMain.add(nouveauPokemon);
        });
      })
      .catch(err => {
        console.error("Erreur de chargement du fichier :", err);
      });

  });





const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  writeFile: async (chemin, contenu) => {
    try {
      await ipcRenderer.invoke('writeFile', chemin, contenu);
      console.log('Écriture dans le fichier réussie.');
    } catch (erreur) {
      console.error('Erreur lors de l\'écriture dans le fichier :', erreur);
    }
  },
});