/* 
let parrafo = document.getElementById("parrafo")

console.log(parrafo.innerHTML)

parrafo.innerHTML = "<button>buen dia</button>"    //reconoce etiquetas de html
parrafo.innerText = "buen dia"    //NO reconoce etiquetas de html, solo texto

console.log(parrafo.innerHTML)
 */


/* let parrafo = document.getElementsByClassName("parrafo")


console.log(parrafo[2].innerHTML)


let letras= document.getElementsByTagName("p")

console.log(letras)




letras.remove()
 */




/* let parrafo = document.createElement("p")
parrafo.innerHTML = "<h2> Hola coder! </h2>"

document.body.append(parrafo) */

let nombre1 = document.querySelector("#parrafo")



const productos = [
    {id:1, nombre:"Arroz", precio:125},
    {id:2, nombre:"fideos", precio:141},
    {id:3, nombre:"pan", precio:165},
    {id:4, nombre:"Flan", precio:75},
]

for (const x of productos){

    let contenedor= document.createElement("div")
    contenedor.innerHTML= `<h3>ID: ${x.id}</h3>
                           <h1> Producto: ${x.nombre}</h1>
                           <b> Precio: ${x.precio}</b>
                           `
document.body.appendChild(contenedor)
}