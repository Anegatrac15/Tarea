let boton = document.getElementById("boton"); /* guarda la etiqueta */

boton.addEventListener("click", function () {
    let cancion = document.getElementById("cancion").value /* guarda el texto dentro de la etiueta */
    var lista = document.getElementById("lista"); /* identificamos donde se guardan las nueas etiquetas */
    
    var etiquetaNueva = document.createElement("li")
    etiquetaNueva.textContent = cancion /* Dentro de la etiqueta nueva le decimos que le vamos agregar un texto, en este caso la cancion que se inserto en el input */

    lista.appendChild(etiquetaNueva);
})

lista.addEventListener("dblclick", function (e) {
    console.log(e.target)
    let cancionE=e.target
    lista.removeChild(cancionE)
})

