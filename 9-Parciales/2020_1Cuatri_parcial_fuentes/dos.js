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
  let maxBolsas;

  let flagMax = 1;
  let maxPrecio;
  let maxTipo;

  let respuesta;

  do {
      tipo = prompt("Ingrese un producto a comprar (arena/ cal/ cemento):").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("Error, ingrese un producto válido a comprar (arena/ cal/ cemento):").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));
    while(cantidad <= 0 || isNaN(cantidad)) {
      cantidad = prompt("Error, ingrese una cantidad existente:");
    }

    precio = prompt("Ingrese el precio por unidad:");
    while(precio <= 0 || isNaN(precio)) {
      precio = prompt("Error, ingrese un precio existente");
    }

    importe = precio * cantidad;
    subtotal += importe;

    switch(tipo){
      case "arena":
        cantArena += cantidad; 
        break;
      case "cal":
        cantCal += cantidad;
        break
      case "cemento":
        cantCemento += cantidad;
        break
    }

    if(flagMax == 1 || precio > maxPrecio) {
      console.log("El precio mas alto cambió")
      maxPrecio = precio;
      maxTipo = tipo;
      flagMax = 0;
    } 

    respuesta = prompt("Quiere ingresar otro producto?").toLowerCase();
  } while (respuesta == "s");

  totalBolsas = cantArena + cantCemento + cantCal;

  if(totalBolsas > 30) {
    descuento = 0.75;
  } else if(totalBolsas > 10){
    descuento = 0.85;
  } else {
    descuento = 0;
  }

  importeTotal = subtotal * descuento;

  if(cantArena > cantCal && cantArena > cantCemento){
    maxBolsas = "arena";
  } else if(cantCal > cantCemento){
   maxBolsas = "cal"
  } else {
    maxBolsas = "cemento"
  }
  
  console.log("a- Importe a pagar: $" + subtotal);
  if(totalBolsas > 10) {
    console.log("b- Importe con descuento: $" + importeTotal);
  }

  console.log("d- El tipo con más bolsas es " + maxBolsas);
  
  console.log("f- El tipo más caro es " + maxTipo + " con un precio de " + maxPrecio);

}

