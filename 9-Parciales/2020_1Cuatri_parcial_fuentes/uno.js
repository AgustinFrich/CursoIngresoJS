class Productos {
  constructor(nombre, precio, cantidad, fabricante){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.fabricante = fabricante;
  }
}

function validarProducto(){
  let producto = prompt("Igresar un nombre de producto válido: ");
  if(producto == "barbijo" ||
     producto == "alcohol" ||
     producto == "jabón") {
       return producto
  } else {
    return validarProducto();
  }
}

function validarPrecio() {
  let precio = prompt("Ingrese el precio del producto entre 100 y 300 incluidos: ");
  precio = parseFloat(precio);
  if (precio < 100 || precio > 300) {
    return validarPrecio();
  } else {
    return precio.toFixed(2);
  }
}

function validarCantidad() {
  let cantidad = prompt("Ingrese la cantidad de unidades del producto entre 1 y 1000 incluidos: ");
  cantidad = parseInt(cantidad);
  if (cantidad <= 0 || cantidad > 1000) {
    return validarCantidad();
  } else {
    return cantidad;
  }
}

function mostrar() {
    
/* Ejemplo de entrada de datos:
let producto1 = new Productos("jabón", 300, 250, "Grido");
let producto2 = new Productos("barbijo", 200, 300, "Arcor");
let producto3 = new Productos("alcohol", 105, 450, "BaratosSA");
let producto4 = new Productos("barbijo", 100, 900, "Coto");
let producto5 = new Productos("jabón", 150, 50, "Wallmart");*/

  let producto1 = new Productos(validarProducto(), validarPrecio(), validarCantidad(), prompt("Ingrese el nombre de la marca o fabricante del producto: "));
  let producto2 = new Productos(validarProducto(), validarPrecio(), validarCantidad(), prompt("Ingrese el nombre de la marca o fabricante del producto: "));
  let producto3 = new Productos(validarProducto(), validarPrecio(), validarCantidad(), prompt("Ingrese el nombre de la marca o fabricante del producto: "));
  let producto4 = new Productos(validarProducto(), validarPrecio(), validarCantidad(), prompt("Ingrese el nombre de la marca o fabricante del producto: "));
  let producto5 = new Productos(validarProducto(), validarPrecio(), validarCantidad(), prompt("Ingrese el nombre de la marca o fabricante del producto: "));

  //Creación de un arreglo para iterar los datos;
  let productosArray = [producto1, producto2, producto3, producto4, producto5];

  //Para averiguar el alcohol más barato;
  let alcoholMasBarato = 300;
  let indexAlcoholMasBarato;
  
  let alcBaratoX;
  for(alcBaratoX = 0; alcBaratoX < 5; alcBaratoX++){
    let alcBaratoY;
    if (productosArray[alcBaratoX].nombre == "alcohol") {
      for (alcBaratoY = 0; alcBaratoY < 5; alcBaratoY++) {
        if (productosArray[alcBaratoX].precio < productosArray[alcBaratoY].precio && productosArray[alcBaratoX].precio <= alcoholMasBarato) {
          alcoholMasBarato = productosArray[alcBaratoX].precio;
          indexAlcoholMasBarato = alcBaratoX;
        }
      } 
     }
   }

  alert("La cantidad de unidades del alcohol más barato es de " + productosArray[indexAlcoholMasBarato].cantidad + " y su fabricante es " + productosArray[indexAlcoholMasBarato].fabricante);

  //Para averiguar el producto con más unidades;
  let masUniX;
  let masUniY;
  let masUnidades = 0;
  let indexMasUnidades;

    for(masUniX = 0; masUniX < 5; masUniX++){
    for (masUniY = 0; masUniY < 5; masUniY++) {
      if(productosArray[masUniX].cantidad > productosArray[masUniY].cantidad && productosArray[masUniX].cantidad > masUnidades){
        masUnidades = productosArray[masUniX].cantidad;
        indexMasUnidades = masUniX;
      }
    }
  }

  //Para averiguar las cantidades promedio por compra;
  let tipoUniX;
  let tipoMasUnidades = productosArray[indexMasUnidades].nombre;
  let contadorMasUnidades = 0;
  let sumaTipoMasUnidades = 0;
  
  for(tipoUniX = 0; tipoUniX < 5; tipoUniX++){
    if(productosArray[tipoUniX].nombre == tipoMasUnidades){
      sumaTipoMasUnidades += productosArray[tipoUniX].cantidad;
      contadorMasUnidades++;
    } 
  }
 
  let cantidadPromedio = sumaTipoMasUnidades/contadorMasUnidades;
  alert("La cantidad promedio de " + tipoMasUnidades + " por compra es de " + cantidadPromedio);

  //Para averiguar la cantidad de unidades de jabón;
  let jabX;
  let contadorJab = 0;

  for(jabX = 0; jabX < 5; jabX++){
    if(productosArray[jabX].nombre == "jabón"){
      contadorJab += productosArray[jabX].cantidad;
    }
  }

  alert("La cantidad total de jabones comprados es de: " + contadorJab);
}