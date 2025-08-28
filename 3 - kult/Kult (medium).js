const body = document.querySelector("body")
function mostrar_texto(texto) {
    const element = document.createElement("div")
    element.textContent = texto
    body.appendChild(element)
}
// 2 dados de 10 + modificador
// 15 o mas Exito completo
// 10-14 Exito parcial
// 9 o menos Fallo

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let exito_completo = 0
let exito_parcial = 0
let fallo = 0
let modificador = 0

for (let a of numeros) {
    for (let b of numeros) {
        let tirada = (a + b) + modificador
        if (tirada >= 15)
            exito_completo++
        else if (tirada >= 10 && tirada <= 14)
            exito_parcial++
        else
            fallo++
    }
}

mostrar_texto("Exitos completos: " + exito_completo * 1 + "%")
mostrar_texto("Exitos parciales: " + exito_parcial * 1 + "%")
mostrar_texto("Fallos: " + fallo * 1 + "%")

// class ObtenedorDePorcetajes {
//     exito_completo = 0
//     exito_parcial = 0
//     fallo = 0
//     constructor(modificador) {
//         for (let a of numeros) {
//             for (let b of numeros) {
//                 let tirada = (a + b) + modificador
//                 if (tirada >= 15)
//                     this.exito_completo++
//                 else if (tirada >= 10 && tirada <= 14)
//                     this.exito_parcial++
//                 else
//                     this.fallo++
//             }
//         }
//     }
// }

// mostrar_texto("")

// let obtenedor_de_porcentajes_con_modificador_0 = new ObtenedorDePorcetajes(0)
// mostrar_texto("Exitos completos (0): " + obtenedor_de_porcentajes_con_modificador_0.exito_completo * 1 + "%")
// mostrar_texto("Exitos parciales (0): " + obtenedor_de_porcentajes_con_modificador_0.exito_parcial * 1 + "%")
// mostrar_texto("Fallos (0): " + obtenedor_de_porcentajes_con_modificador_0.fallo * 1 + "%")

// mostrar_texto("")

// let obtenedor_de_porcentajes_con_modificador_1 = new ObtenedorDePorcetajes(1)
// mostrar_texto("Exitos completos (1): " + obtenedor_de_porcentajes_con_modificador_1.exito_completo * 1 + "%")
// mostrar_texto("Exitos parciales (1): " + obtenedor_de_porcentajes_con_modificador_1.exito_parcial * 1 + "%")
// mostrar_texto("Fallos (1): " + obtenedor_de_porcentajes_con_modificador_1.fallo * 1 + "%")
