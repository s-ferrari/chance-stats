const body = document.querySelector("body")
function mostrar_texto(texto) {
    const element = document.createElement("div")
    element.textContent = texto
    body.appendChild(element)
}
// 3 dados de 6
// 5 o mas es 1 exito, cuantos de cada tirada hay

let numeros = [1, 2, 3, 4, 5, 6]

let exitos0 = 0
let exitos1 = 0
let exitos2 = 0
let exitos3 = 0
let total = 0

for (let a of numeros) {
    for (let b of numeros) {
        for (let c of numeros) {

            //contar exitos de cada combinacion
            let exitosEnEstaTirada = 0 //solo para una combinación
            if (a >= 5)
                exitosEnEstaTirada++
            if (b >= 5)
                exitosEnEstaTirada++
            if (c >= 5)
                exitosEnEstaTirada++

            //sumar a cada contador correcto
            if (exitosEnEstaTirada === 0)
                exitos0++;
            else if (exitosEnEstaTirada === 1)
                exitos1++;
            else if (exitosEnEstaTirada === 2)
                exitos2++;
            else if (exitosEnEstaTirada === 3)
                exitos3++;

            total++
        }
    }
}
mostrar_texto("0 exitos:" + exitos0 / total * 100)
mostrar_texto("1 exitos:" + exitos1 / total * 100)
mostrar_texto("2 exitos:" + exitos2 / total * 100)
mostrar_texto("3 exitos:" + exitos3 / total * 100)



// for (let a of numeros) {
//     for (let b of numeros) {
//         for (let c of numeros) {
//             let tirada = a.toString() + b.toString() + c.toString()
//             if (tirada >= 5)
//                 exitos++
//             mostrar_texto(tirada)
//         }
//     }
// }