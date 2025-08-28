const body = document.querySelector("body")
function mostrar_texto(texto) {
    const element = document.createElement("div")
    element.textContent = texto
    body.appendChild(element)
}

let cantidad_fallos = 0
let cantidad_exitos = 0
let cantidad_exito_critico = 0
let cantidad_fallo_critico = 0

for (let i = 1; i <= 100; i++) {
    if (i == 1 || (i % 11 == 0 && i <= 40))
        cantidad_exito_critico++
    else if (i == 100 || (i % 11 == 0 && i > 40))
        cantidad_fallo_critico++
    else if (i > 40)
        cantidad_fallos++
    else
        cantidad_exitos++
}

mostrar_texto("Fallos: " + cantidad_fallos * 1 + "%")
mostrar_texto("Exitos: " + cantidad_exitos * 1 + "%")
mostrar_texto("Exito critico: " + cantidad_exito_critico * 1 + "%")
mostrar_texto("Fallo critico: " + cantidad_fallo_critico * 1 + "%")