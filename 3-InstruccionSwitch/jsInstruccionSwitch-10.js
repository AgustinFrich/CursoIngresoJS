function mostrar() {
  let estacionIngresada = document.getElementById("txtIdEstacion").value;
  let destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Bariloche":
		if(estacionIngresada == "Invierno" || estacionIngresada == "Otoño"){
			alert("Se viaja");
		} else {
			alert("No se viaja");
		}
      break;
    case "Cataratas":
		if(estacionIngresada == "Verano" || estacionIngresada == "Otoño" || estacionIngresada == "Primavera"){
			alert("Se viaja");
		} else {
			alert("No se viaja");
		}
      break;
    case "Mar del plata":
		if(estacionIngresada == "Verano" || estacionIngresada == "Otoño" || estacionIngresada == "Primavera"){
			alert("Se viaja");
		} else {
			alert("No se viaja");
		}
      break;
    case "Cordoba":
		if(estacionIngresada == "Otoño" || estacionIngresada == "Primavera"){
			alert("Se viaja");
		} else {
			alert("No se viaja");
		}
      break;
  }
} 