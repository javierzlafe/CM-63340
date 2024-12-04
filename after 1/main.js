/* 
    estructura html *
    enlace al script js *
    funcion para loguear *
    variables *
    tiene 3 intentos *
    debe tener usuario y acontraseña *
    bucles, *
    condicionales,*
    operadores logicos avanzados (&&, !=, ||), *
    alert, *
    prompt *
*/


function loguear(){
let identificar =  true
let intentos = 1
do{
    let usuario = prompt("ingresa tu usuario");

    if (usuario == null || usuario == "") { //si el usuario el nulo, se termina el proceso
        alert("no se reconoce el usuario, intente mas tarde")
        break;
    }
    if ( ( usuario == "admin" || usuario== "javier") && intentos<=3){

        let pass = prompt("ingresa tu contraseña")

        if( pass == null){ //lo saco del sistema si no pone contraseña
            break;
        }
        if(pass === "1234"){
            alert("bienvenido usuario ", usuario)
            identificar = false
        }else{
            alert("Contraseña incorrecta");
            intentos++
            if(intentos>3){
                alert("usted supero los 3 intentos, vuelva mas tarde"); // muestra al susario
                console.error("No se reconoce la pass");  //muestra en consola
                break;
            }
        }
    }
}while(identificar)
}
loguear()