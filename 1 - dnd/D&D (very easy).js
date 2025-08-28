const body = document.querySelector("body")
function mostrar_texto(texto) {
    const element = document.createElement("div")
    element.textContent = texto
    body.appendChild(element)
}

// function probabilidad (valor) {
//     if (valor == 20)
//         return "exito critico"

//     if (valor < 10)
//         return "fallo"

//     if (valor >= 10)
//         return "exito"
// }

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let cantidad_de_fallos = 0
let cantidad_de_exitos = 0
let modificador = 1
for (let numero of numeros) {
    if (numero + modificador < 10)
        cantidad_de_fallos++
    else
        cantidad_de_exitos++
}
mostrar_texto("Fallos: " + cantidad_de_fallos * 5 + "%")
mostrar_texto("Exitos: " + cantidad_de_exitos * 5 + "%")
mostrar_texto("Exito critico: 5%")

// let cantidad_de_fallos = 0
// let cantidad_de_exitos = 0
// for (let i = 1; i <= 19; i++) {
//     if (i < 10)
//         cantidad_de_fallos++
//     else
//         cantidad_de_exitos++
// }