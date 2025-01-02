

/* let boton = document.getElementById("boton") */


/* function saludar(){
    let nombre = prompt("inresa tu nombre")
    alert(`bienvenido al 2025 ${nombre}`)
}
 */
//boton.onclick = ()=>{alert("hola 2025")}  con el prefijo on


/* boton.addEventListener("mousemove", function(event){
    console.log("el mouse esta en la posicion x: " + event.clientX + " y en la posicion Y: " + event.clientY)
})


boton.addEventListener("click", ()=>console.log("tatatatatatatatata"))

boton.addEventListener("mouseup", ()=>console.log("recargando balas"))
 */
/* 

let inputField = document.getElementById("miCampoDeTexto")

inputField.addEventListener("change", function(event){
    console.error(event.target.value + "no es un mail con formato reconocido")
})

 */



let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
   
}
