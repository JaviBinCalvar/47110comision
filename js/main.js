

//variables
let cantidad = parseInt(prompt("ingrese cantidad del producto seleccionado"));
console.log(cantidad);
let precio = parseFloat(prompt("ingrese el precio del producto"));
console.log(precio);

if ((cantidad !== 0) && (precio !== 0)){
    let impuestos = precio*1.21;
    let precioImpuesto = precio+impuestos; 
    let compra = cantidad*precioImpuesto;
    let descuento = compra*0.10;
    let totalPagar = compra-descuento;

    alert("El descuento es de: "+descuento);
    alert("El total a pagar es de:"+totalPagar);

} else{
    alert("Ingrese cantidad de productos y precio distinto de 0");
}

