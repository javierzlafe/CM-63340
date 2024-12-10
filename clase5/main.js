
//OBJETOS LITERALES


//clave: valor


/* const empleado1 = {
    nombre: "javier gimenez",
    cargo: "Profesor",
    ingreso: "2021-03-25",
    edad: 16
}


if(empleado1.edad == null){
  prompt("ingrese la edad")
} */



//OBJETO CONSTRUCTOR o tambien conocido como FUNCION CONSTRUCTORA


/* function Producto (id,nombre,importe,stock){ //primera inicial en mayuscula para diferenciar de una funcion normal
    this.id = id,
    this.nombre = nombre,
    this.importe = importe,
    this.stock = stock,
    this.importeConIva = function(){ return this.importe * 1.21}
}

const producto1 = new Producto(1,"teclado",35000, 17)
const producto2 = new Producto(1,"mouse",27000, 17)
const producto3 = new Producto(1,"monitor",169000, 17)

alert(producto3.importeConIva) */




function Coche(marca, modelo, anio){
    this.marca= marca,
    this.modelo= modelo,
    this.anio= anio,
    this.avanzar = function(){alert("el coche avanza")},
    this.frenar = function(){alert("el coche frena")},
    this.arrancar = ()=>alert(`el ${this.modelo} esta en marcha, y ${this.marca} saco una version nueva`)
}



let chevrolet = new Coche("chevrolet", "camaro", 2022)
let ford = new Coche("ford", "mustang", 2022)
let fiat = new Coche("fiat", "147", 1995)


fiat.arrancar()

for( i in chevrolet){
}
console.log(i.fiat)