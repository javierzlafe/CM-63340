
/* let usuario = prompt("cual es tu nombre?").toUpperCase()

if(usuario == "TOMAS"){
    alert("bienvenido tomas")
}else{
    alert("vos no sos tomas, sos un intruso")
}
 */

/* let numero = parseInt(prompt("ingresa un numero")) 

if (numero === 15){
    alert("los numeros coinciden")
}
 */

/* parseInt = numero entero
parseFloat = numero decimal */

/* 
=  asignacion
== comparacion
=== comparacion estricta

*/


/* 
let num1 = parseFloat(prompt("ingresa el primer numero")) 
let num2 = parseFloat(prompt("ingresa el segundo numero")) 



if(num1 > num2){
    alert("numero " + num1 + " es mayor a " + num2)
}else if(num2 > num1){
    alert("numero " + num2 + " es mayor a " + num1)
}else if(num1 == num2){
    alert("ambos numeros valen lo mismo")
}else{
    alert("esto no se puede comparar numericamente")
} */

/* 
let nombre = prompt("ingresa nombre")

let apellido = prompt("ingresa apellido")


if ((nombre!="") && (apellido!="")){
alert("todo ok")
}else{
    alert("algo fallo")
}
 */




/* if( (nombre!="") && ( (nombre=="ema") || (nombre== "EMA"))){alert("BLABLA")}


if(  ((nombre!="")  && (nombre == "EMA")) ||    (nombre=="ema")           ){} */




/* 
producto  *
precio del producto  *
comprador
oferta del usuario
comparacion de lo que me sirve o no
*/


alert("vendo algo, escucho ofertas")
let ofertaBase = 2000
let ofertaUsuario =  parseInt(prompt("ingresa tu oferta"))

if ( ofertaUsuario < 1500){
    alert("anda pa`lla bobo")
}else if((ofertaUsuario >= 1501) && (ofertaUsuario <= 2000)){
    alert("estirate un poco mas")
}else if( ofertaUsuario > ofertaBase){
    alert("el producto es tuyo,llama para blablablabla")
}