

//              FOREACH

/* foreach() ejecuta una funcion por cada elemento del array */


/* const frutas = ["manzana", "banana", "naranja"]


frutas.forEach(
    function(x){
    console.log(x.toUpperCase)
})         */              


//                  MAP


/* map() crea un NUEVO array con el resultado de llamar a la funcion */

/* const numeros = [1,2,3,4,5]


const doble = numeros.map(   function(x){
    return x*2
})

console.log(numeros)
console.log(doble)
 */



//                  FIND


/* find(  se utiliza para buscar un elemento en un array. Devuelve solo el PRIMER ELEMENTO que cumpla con la condicion) */


/* const numeros = [1,2,3,4,5]

const encontrado = numeros.find(   (x)=> x <3   )

console.log(encontrado) */


//              FILTER

/* FILTER() crea un nuevo array con TODOS los elementos que pasan la prueba */


/* const numeros = [1,2,3,4,5,6,7,8,9,1,0,123,456,78965,432,165,49,84,321]


const numerosPares = numeros.filter(   function(x){  return x % 2 === 0 }     )

console.log(numerosPares) */



//              REDUCE


/* REDUCE()   */

/* const preciosPrendas =[1,2,3,4,5]


const precioFinal = preciosPrendas.reduce(      (acumulador,valorActual)=> acumulador + valorActual                 )

console.log(precioFinal) */


//                      SORT

/* sort() Ordenar los numeros de forma acendente */

/* 
const numeros = [ 7,2,10,1,5]


numeros.sort(function(a,b){
    return a,b
})

console.log(numeros)
 */





//ejemplo practico



const Producto = function(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
let producto1 = new Producto("lenovo", 350000,20)
let producto2 = new Producto("samsung", 350000,20)
let producto3 = new Producto("apple", 350000,20)
let producto4 = new Producto("blabla", 350000,20)

let lista = [producto1,producto2,producto3,producto4]

function filtrarProductos(){
    let palabraClave= prompt("ingresa el producto").toUpperCase()
    let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave)  )


    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia")
    }
}