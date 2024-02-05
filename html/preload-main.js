window.addEventListener('DOMContentLoaded', () => {
    const cheminDuFichier = "../save/choose.sav";
    const selectMain = document.querySelector(".pokemon");
    
    // Utiliser Fetch pour charger le fichier
    fetch(cheminDuFichier)
      .then(response => response.text())
      .then(data => {
        // Traitement du fichier après la réussite du chargement
        var contenuDuFichier = data;

        //Enleve la 2 ligne vide
        let lignes = contenuDuFichier.split('\n');
        lignes.splice(1, 1)
        contenuDuFichier = lignes.join("/n")
        selectMain.innerHTML = contenuDuFichier
      })
      .catch(err => {
        console.error("Erreur de chargement du fichier :", err);
      });

  });