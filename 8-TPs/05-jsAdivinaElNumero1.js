var numeroSecreto; 
var contadorIntentos = 0;

function comenzar() {
	numeroSecreto = Math.round(Math.random() * 100);
  alert(numeroSecreto);
}

function verificar() {
  contadorIntentos++;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  let intento = document.getElementById("txtIdNumero").value;

	if(intento == numeroSecreto) {
    alert("Usted es un ganador!!! y en solo "+ contadorIntentos + " intentos")
  } 
  
  else if(intento > numeroSecreto) {
    alert("Se pasó...");
  } 
  
  else {
    alert("Falta...");
  }
}