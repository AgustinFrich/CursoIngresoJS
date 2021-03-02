function mostrar() {
  let tipo;
  let cantidad;
  let precio;
  let importe;

  let subtotal = 0;
  let descuento = 0;
  let importeTotal = 0;

  let cantArena = 0;
  let cantCal = 0;
  let cantCemento = 0;
  let totalBolsas;

  let flagMax = 1;
  let maxPrecio;
  let maxTipo;

  let respuesta;

  do {
      tipo = prompt("Ingrese un producto a comprar (arena/ cal/ cemento):").toLocaleLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("Error, ingrese un producto válido a comprar (arena/ cal/ cemento):").toLocaleLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));
    while(cantidad <= 0 || isNaN(cantidad)) {
      cantidad = prompt("Error, ingrese una cantidad existente:");

    precio = prompt("Ingrese el precio por unidad:");
    while(precio <= 0 || isNaN(precio)) {
      precio = prompt("Error, ingrese un precio existente");
    }

    importe = precio * cantidad;
    subtotal += importe;
    
    switch(tipo){
      case "arena":
        cantArena += cantidad; 
    }

    respuesta = prompt("Quiere ingresar otro producto?").toLocaleLowerCase();
  } while (respuesta == "s");
}
