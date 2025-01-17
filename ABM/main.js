/* 

ingreso de librerias, 
sacar prompt, alert, etc...
funcionalidad con eventos,
agregar formularios,
storage

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

 let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]

//busco si hay productos en el localstorage
 if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
 }else{
    lista=lista
 }



//funciones del abm

function filtrarProducto(){

    //formulario para filtrar echo con sweet alert
    Swal.fire({
        title: 'ingresa el producto que deseas buscar',
        input: 'text',
        showCancelButton: true,
        ConfirmButtonText:'Buscar',
        showLoaderOnConfirm: true,


        preConfirm: (palabraClave)=>{
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

            if(resultado.length >0){
                //card por si se encuentran resultados
                Swal.fire({
                    title: 'este es el resultado de tu busqueda',
                    html: '<table> <tr> <th>Nombre</th> <th>Precio</th> <th>Stock</th> </tr> <table/>' + 
                    resultado.map(  (producto)=> `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td>`) ,
                })

            }else{
                Swal.fire({
                    title:`no se encuentra coincidencias`,
                    icon:'error',
                    confirmButtonText: `ok`,
                })
            }
        }

    })

}

function agregarProducto(){

    Swal.fire({

        title:`agregar producto`,
        html:`<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>

        <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">

        <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,

        showCancelButton: true,
        confirmButtonText:"agregar",
        cancelButtonText: "cancelar",
    }).then((result)=>{
        if(result.isConfirmed){
            let nombre = document.getElementById("nombre-input").value.trim();
            let precio = document.getElementById("precio-input").value.trim();
            let stock = document.getElementById("stock-input").value.trim();

            if(isNaN(precio) || isNaN(stock) || nombre===""){
                Swal.fire(
                    {
                        icon: "error",
                        title:"Error",
                        text:"por favor ingresa valores validos"
                    }
                ); return
            }
            let producto = new Producto(nombre,precio,stock)

            if (lista.some ((elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    icon:"warning",
                    title: "Advertencia",
                    text:"El producto ya existe en la lista"
                }); return
                
            }
            lista.push(producto)

            localStorage.setItem("productos", JSON.stringify(lista)) //envio la lista al local storage

            Swal.fire({
                icon:"succes",
                title:"Producto Agregado",
                text: `se agrego el producto${producto.nombre} a la lista`,
                timer: 3000
            })
            console.table(lista)

        }
    })
}

//BOTONERA

let agregar = document.getElementById("agregar")
agregar.addEventListener("click",agregarProducto )

let filtrar = document.getElementById("filtrar")
filtrar.addEventListener("click", filtrarProducto)