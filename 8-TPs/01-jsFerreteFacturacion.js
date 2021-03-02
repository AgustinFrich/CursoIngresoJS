/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var precio1;
    var precio2;
    var precio3;

    function Transformar(){
        precio1 = document.getElementById("txtIdPrecioUno").value;	
        precio2 = document.getElementById("txtIdPrecioDos").value;	
        precio3 = document.getElementById("txtIdPrecioTres").value;
        precio1 = parseInt(precio1);
        precio2 = parseInt(precio2);
        precio3 = parseInt(precio3);
    }

function Sumar () {
    Transformar();
    let suma = precio1 + precio2 + precio3;
    alert("El valor de la suma es de $" + suma);
}

function Promedio () {

    Transformar();
    let promedio = (precio1 + precio2 + precio3)/3;
    alert("El valor del promedio es de $" + promedio);

}

function PrecioFinal () {
    Transformar();

    let precioFinal = (precio1 + precio2 + precio3)*1.21;
    alert(precioFinal);
}