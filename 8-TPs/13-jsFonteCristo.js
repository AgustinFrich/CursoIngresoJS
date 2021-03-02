var numeroIngresado;

function NumerosPares() {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado > 0) {
        let contador = 0;
        for(let x = numeroIngresado -1; x > 0; x--) {
            if(x % 2 == 0){
                contador++;
            }
        }
        alert("Hay " + contador + " numeros pares por debajo del numero " + numeroIngresado);
    } else {
        alert("El numero no es positivo");
    }
} 

function NumerosImpares() {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado > 0) {
        let contador = 0;
        for(let x = numeroIngresado -1; x > 0; x--) {
            if(x % 2 == 1){
                contador++;
            }
        }
        alert("Hay " + contador + " numeros impares por debajo del numero " + numeroIngresado);
    } else {
        alert("El numero no es positivo");
    }
}

function NumerosDivisibles() {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado > 0) {
        let contador = 0;
        for(let x = 100; x > 0; x--) {
            if((numeroIngresado % x) == 0){
                contador++;
            }
        }
        alert("Hay " + contador + " numeros divisibles del 1 al 100 del numero " + numeroIngresado);
    } else {
        alert("El numero no es positivo");
    }
}

function VerificarPrimo() {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado > 0) {
        let contador = 0;
        for(let x = 100; x > 0; x--) {
            if((numeroIngresado % x) == 0){
                contador++;
            }
        }
        if(contador <= 2){
            alert("El número " + numeroIngresado + " es un número primo");
        } else {
            alert("El número " + numeroIngresado + " no es un número primo");
        }
    } else {
        alert("El numero no es positivo");
    }
}

function NumerosPrimos() {
    numeroIngresado = document.getElementById("txtIdNumero").value;

    if(numeroIngresado > 0) {
        let contador = 0;
        
        for(let x = numeroIngresado - 1; x > 0; x--) {
            let contador2 = 0;
            for(let y = x; y > 0; y--) {
                if(x % y == 0) {
                    contador2++;
                }
            }
            if(contador2 <= 2){
                contador++;
            }
        }
        
        alert("El numero " + numeroIngresado + " tiene " + contador + " numeros primos por debajo");
        
    } else {
        alert("El numero no es positivo");
    }
}