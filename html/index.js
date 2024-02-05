const button = document.querySelector(".valider");
const pokemonchoose = document.getElementById("liste-choix-pokemon");

button.addEventListener("click", clickAdd => {

    const cheminDuFichier = "save/choose.sav";
    const choix = pokemonchoose.value

    
    electronAPI.writeFile(cheminDuFichier, choix);

    self.close()
});
