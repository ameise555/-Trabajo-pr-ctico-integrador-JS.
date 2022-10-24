//Variables
var precio = 200;
var btnRes = document.getElementById("btnRes");
var btnBorrar = document.getElementById("btnBorrar");

document.getElementById("btnRes").addEventListener("click", function() {
    let cantidad = document.getElementById("IngreseCantidad").value;
    let categoriaDescuento = document.getElementById("inputState").value;
    document.getElementById("PrecioTotal").innerHTML = PrecioT();
});

document.getElementById("btnBorrar").addEventListener("click", function() {
    document.getElementById("PrecioTotal").innerHTML = borrar();
});

//Funciones

function cantidadPrecio() {
   let cantidad = document.getElementById("IngreseCantidad").value;
   let resultadoCantidad = cantidad * precio;
   return resultadoCantidad;
}  // Cálculo del precio por cantidad;

function PrecioDescuento() {
    let categoriaDescuento = document.getElementById("inputState").value;
    let dto;
    switch (categoriaDescuento) {
        case "1":
            dto = 80;
            break;
        case "2":
            dto = 50;
            break;
        case "3":
            dto = 15;
            break;
    }
    precioConDto = (cantidadPrecio() * dto) / 100;
    return precioConDto;
}// Cálculo del descuento por categoría;

function PrecioT() {
    let categoriaDescuento = document.getElementById("inputState").value;
    if (categoriaDescuento === "" || categoriaDescuento === "Elije una opción...") {
        return ("Ingrese una categoría.");
    } else {
        let PTot = cantidadPrecio() - PrecioDescuento();
        return  ("Total a pagar: " + "$" + PTot);
    } 
}// Cálculo del precio total, restando la cantidad de tickets total menos el descuento por categoría.

function borrar() {
    window.location.reload();
}