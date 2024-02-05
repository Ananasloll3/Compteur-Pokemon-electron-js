const buttonAdd = document.querySelector(".addOne");
const buttonRemove = document.querySelector(".removeOne");
const nombreSpan = document.querySelector(".nombre-span");

var nombre = 0


buttonAdd.addEventListener("click", clickAdd => {
    nombre += 1
    nombreSpan.innerHTML = nombre
});


buttonRemove.addEventListener("click", clickAdd => {
    nombre -= 1
    if (nombre < 0)
    {
        nombre += 1
    }
    nombreSpan.innerHTML = nombre
});