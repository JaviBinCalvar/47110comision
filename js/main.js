

// funciones

function precioAnzuelos(precio){
    let cantidad = parseInt(prompt("ingrese cantidad anzuelo Mustad"));
    let preciofinal = precio * cantidad;

        if(preciofinal > 500){
            preciofinal * 0.9;
        } else {
            preciofinal;
        }

    return preciofinal;
}

function precioPlumas(precio){
    
    let cantidad = parseInt(prompt("ingrese cantidad pluma Marabu"));
    let preciofinal = precio * cantidad;
    

        if(preciofinal > 800){
            preciofinal * 0.85;
        } else {
            preciofinal;
        }

    return preciofinal;
}

function calculoPrecio(producto, funcionPrecioFinal){

    let preciofinal = funcionPrecioFinal(producto.precio);

    return preciofinal;

}

//objetos

class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;

    }
}

const producto1 = new Producto("mustad", "100", "anzuelos");
const producto2 = new Producto("marabu", "150", "plumas");

const precioMustad = calculoPrecio(producto1, precioAnzuelos);
const precioMarabu = calculoPrecio(producto2, precioPlumas);

console.log(precioMustad);
console.log(precioMarabu);
