/* 

producto nombre,precio,id,stock
constructor, para que el usuario cree

*/


const Producto = function(nombre, precio, stock){
    this.nombre= nombre
    this.precio = precio
    this.stock = stock
}
let producto1  = new Producto("notebook lenovo",1650000,20)
let producto2  = new Producto("notebook samsung",1650000,2)
let producto3  = new Producto("notebook asus",1650000,35)
let producto4  = new Producto("notebook mac",1650000,98)
let producto5  = new Producto("galaxy s24",1650000,23)
let producto6  = new Producto("smartwatch",1650000,65)
let producto7  = new Producto("xiaomi",1650000,14)

 



function filtrarProducto(){
    let palabraClave = prompt("ingresa el producto que buscas")
    let resultado = lista.filter( (x)=>x.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro")
    }
}




function agregarProducto(){
let nombre= prompt("ingresa el nombre del producto")
let precio = prompt("ingresa el precio del producto")
let stock = prompt("ingresa el stock del producto")

if(isNaN(precio) || isNaN(stock) || nombre == ""){
    alert("por favor ingrese valores validos")
    return
}
let producto = new Producto (nombre,precio,stock)
lista.push(producto)
console.log(lista)
}





//BOTONERA

let agregar = document.getElementById("agregar")
agregar.addEventListener("click",agregarProducto )

let filtrar = document.getElementById("filtrar")
filtrar.addEventListener("click", filtrarProducto)