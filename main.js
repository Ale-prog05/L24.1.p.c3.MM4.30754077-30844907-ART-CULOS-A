let articulos = [
{departamento: 2, nombre: "Pijama", precio: 15, existencia: 2} ,
{departamento: 1, nombre: "comida", precio: 10, existencia: 3} ,
{departamento: 3, nombre: "farmacia", precio: 20, existencia: 10} ,
{departamento: 1, nombre: "Pijama", precio: 10, existencia: 5} , ]

let salida = document.getElementById("salida")


let cantidadArticulosSinExistencia = (articulos, existencia) => { 
    let contador = 0
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].existencia === existencia) {
            contador++
        }
    }
    return contador
}

salida.innerHTML = `cantidad de articulos sin existencia: ${cantidadArticulosSinExistencia(articulos, 0)}`
