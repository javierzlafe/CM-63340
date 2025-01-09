




const edad = 18

/* if(edad>=18){
    console.log("Es mayor, puede ingresar")
}else if{
    console.log("es menor de edad")
} */


/* 
const mensaje = edad >=18 ? "es mayor, puede inrgesar" : "es menor"


console.log(mensaje)



console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy */


/* 
const usuario1 = {
    nombre: "John Doe",
    edad: 14
  }
  const usuario2 = null
  
  console.log( usuario1 || "El usuario no existe" )
  // { nombre: 'John Doe', edad: 14 }
  
  console.log( usuario2 || "El usuario no existe" )
  // El usuario no existe
   */

/* 
  let carrito

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage
} else {
  carrito = []
}

//otra manera con el operador logico ||
const carrito = JSON.parse(localStorage.getItem('carrito')) || [] */




/* const persona = {
    nombre: "juan",
    direccion:{
        calle: "calle falsa",
        numero: 123
    }
}

const {nombre,direccion:{calle,numero}} = persona


console.log(numero) //123 */



const data = {
    "timestamp":165305269823,
    "API_KEY":"KHYVBASFD6546ASfdtglijnadfg654",
    "base": "USD",
    "rates":{
        "ARS":1150,
        "BRL":6,
        "MEX":20,
        "URU":42,
        "BOL":12,
        "COL":4321
    }
}

//desestructuracion para obtener el valor de ARS


const {rates:{ARS}} = data

console.log(ARS)