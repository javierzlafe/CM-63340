
//ESTRUCTURA  DEL FOR

//for(desde; hasta; incremento)

/* for(let i =0; i<=10;i++){

if(i<5){
    continue
}

    console.log("contando hasta "+i)
} */

/* 
while(iterar == true){

}
*/

/* let contador = true

while(contador ==true){
    console.log("mostrando el mensaje por el while")
    contador = confirm("desea continuar?")
} */



/* let contador = 6;

do{
    console.log("el valor del contador es "+contador)

}while(contador<5) */



/* 
login 
3 intentos
avisamos los intentos que le quedan
*/


let intentos = 3
let identificar = true
do{
    let usuario =  prompt("ingresa tu usuario, (solo 3 intentos)")
    if(usuario === null){
        alert("por favor intente de nuevo")
        break
    }

    if(usuario === "admin" && intentos <1){
        alert("bienvenido "+ usuario) 
        identificar = false
    }else{
        alert("no se reconoce el usuario "+ usuario + "le quedan "+ intentos)
        intentos--
            if(intentos<0){  //si los intentos superas los 3
                alert("usted supero los 3 intentos")
                break            
            }
    }


}while(identificar === true)

/* let color = prompt("inresa  un color")


switch(color){
    case "blanco":
        alert("es blanco")
        break;
    case "azul":
        alert("es azul")
        break;
    case "verde":
        alert("es verde")
        break;
    case "rojo":
        alert("es rojo")
        break;
    default:
        alert("no se encontro coincidencia")

}
 */