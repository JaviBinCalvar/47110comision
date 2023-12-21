// pre entraga2
// funciones

//function precioAnzuelos(precio){
    //let cantidad = parseInt(prompt("ingrese cantidad anzuelo Mustad"));
    //let preciofinal = precio * cantidad;

        //if(preciofinal > 500){
        //    return preciofinal * 0.9;
       // } else {
         //   return preciofinal;
        //}

    


//function precioPlumas(precio){
    
    //let cantidad = parseInt(prompt("ingrese cantidad pluma Marabu"));
   // let preciofinal = precio * cantidad;
    

       // if(preciofinal > 800){
         //   return preciofinal * 0.85;
        //} else {
            //return preciofinal;
        //}

    
//}

//function calculoPrecio(producto, funcionPrecioFinal){

    //let preciofinal = funcionPrecioFinal(producto.precio);

    //return preciofinal;

//}

//objetos

//class Producto{
    //constructor(nombre, precio, categoria){
        //this.nombre = nombre;
        //this.precio = precio;
        //this.categoria = categoria;

   // }
//}

//const producto1 = new Producto("mustad", "100", "anzuelos");
//const producto2 = new Producto("marabu", "150", "plumas");

//const precioMustad = calculoPrecio(producto1, precioAnzuelos);
//const precioMarabu = calculoPrecio(producto2, precioPlumas);

//console.log(precioMustad);
//console.log(precioMarabu);

/// pre entrega 3 ----------------------------

// formulario

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;
let consulta = document.getElementById("consulta").value;

const inputnombre = document.querySelector (".inputnombre");

inputnombre.addEventListener("keydown", () => {
    console.log("se presiono una tecla");
    
});
inputnombre.addEventListener("keyup", () => {
    console.log("se solto una tecla");
    
});
const inputemail = document.querySelector (".inputemail");

inputemail.addEventListener("keydown", () => {
    console.log("se presiono una tecla");
    
});
inputemail.addEventListener("keyup", () => {
    console.log("se solto una tecla");
    
});
const inputtel = document.querySelector (".inputtel");

inputtel.addEventListener("keydown", () => {
    console.log("se presiono una tecla");
    
});
inputtel.addEventListener("keyup", () => {
    console.log("se solto una tecla");
    
});

const formsubmit = document.querySelector (".seccionformulario");

formsubmit.addEventListener("submit", (e) =>{
    e.preventDefault();

    console.log("se hizo submit");
})



function agregarProdEnLs (producto , cantidad) {
    const porductoASumarse {
        nombre: producto.nombre,
        precio:  producto.precio,
        cantidad: parseInt(cantidad),
    };
    const ls = localStorage.getItem ("carrito");

    if (ls === null) {
        const carrito =[porductoASumarse];

        localStorage.setItem ("carrito" , JSON.stringify(carrito) );
    } else {

        const carrito = JSON.parse(ls);
        const siExisteProducto = carrito.findIndex((ep) => {
            return ep.nombre === porductoASumarse.nombre;
        });
        if (siExisteProducto === -1) {
            carrito.push(porductoASumarse);

        } else {
            carrito[siExisteProducto].cantidad += parseInt(cantidad);
        }
        localStorage.setItem ("carrito" , JSON.stringify(carrito) );
    }
};


const carrito = document.getElementById("listacarrito");

carrito.addEventListener("click", () => {
    const cantidad = cantCarrito.value;
    console.log(`agregaste ${cantidad} de ${producto.nombre}`);
    //agregar al LS
    agregarProdEnLs (producto, cantidad);
});

///clases
class producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }
}
//funciones
renderProductos(moscasymateriales);

function renderProductos (productos){
    const contenedordosid = document.getElementById("contenedordosid");
    for (const producto of productos){
        
        //creando elementos
        const article = document.createElement("article");
        article.className = "cards";

        const divMayor = document.createElement("div");
        divMayor.className = "divCard";

        const h3 = document.createElement("h3");
        h3.className = "tituloh3";
        h3.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "parrafo";
        p.innerHTML = ` <strong> precio: </strong> ${producto.precio} -
        <strong> stock: </strong> ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "botonMat";
        button.innerText = "Comprar Materiales";

        const cantCarrito = document.createElement("input");
        cantCarrito.type = "number";
        cantCarrito.className = "form-control";
        cantCarrito.value = "1";



        //insertando elementos

        divMayor.append (h3 , p , button , cantCarrito);
        article.append (divMayor);
        contenedordosid.append(article);








    }
}


//programa
const moscasymateriales = [

    new producto ("materiales" , 100 , 20),
    new producto ("moscas" , 200, 30),
    
];



//json

const jsJSON = JSON.stringify(moscasymateriales);

console.log(jsJSON);
console.log(typeof moscasymateriales);
console.log(typeof jsJSON);

localStorage.setItem("moscasymateriales", jsJSON);


