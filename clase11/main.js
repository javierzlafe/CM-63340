

//HAY 4 METODOS

/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el storage
removeItem() para eliminar un dato
clear() limpiar
*/



const inputNombre = document.querySelector("#inputNombre")
const inputEdad = document.querySelector("#inputEdad")
const inputEmail = document.querySelector("#inputEmail")
const inputProfesion = document.querySelector("#inputProfesion")
const botonEnviar = document.querySelector("#boton")
const botonRecuperar = document.getElementById("botonRecupero")
const botonLimpiar = document.getElementById("limpiarInfo")



//funcion que me guarde el formulario en el localStorage

function guardarFormulario(){

    const datosDelFormulario = {
        nombre: inputNombre.value,
        edad: inputEdad.value,
        email: inputEmail.value,
        profesion: inputProfesion.value
    }

    let resultado = JSON.stringify(datosDelFormulario)
    console.log(resultado)
    localStorage.setItem("datosDelFormulario", datosDelFormulario)

    
}

botonEnviar.addEventListener(`click`,guardarFormulario)
botonRecuperar.addEventListener(`click`,recuperarDatosDelFormulario)
botonLimpiar.addEventListener(`click`,limpiarLocalStorage)



function recuperarDatosDelFormulario(){

   const recuperarDatosDelFormulario = json.parse(localStorage.getItem("datosDelFormulario"))
    inputEdad.value = localStorage.getItem(`edad`)
    inputEmail.value = localStorage.getItem(`email`)
    inputProfesion.value = localStorage.getItem(`profesion`)
}


function limpiarLocalStorage(){
    localStorage.clear()
}