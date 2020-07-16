/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaracion de variables
    var precio1, precio2, precio3, total; 

    //Toma los numeros y los convierte a decimal
    precio1 = txtIdPrecioUno.value;
    precio1 = parseInt(precio1, 10);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseInt(precio2, 10);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseInt(precio3, 10);

    //Suma los numeros
    total = (precio1+precio2+precio3);

    //Imprime la suma
    alert("El total bruto de los productos es "+total);
    
}
function Promedio () 
{
    //Declaracion de variables
    var precio1, precio2, precio3, total; 

    //Toma los numeros y los convierte a decimal
    precio1 = txtIdPrecioUno.value;
    precio1 = parseInt(precio1, 10);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseInt(precio2, 10);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseInt(precio3, 10);

    //Saca el promedio
    total = (precio1+precio2+precio3)/3;

    //Imprime el promedio
    alert("El promedio de su compra es "+total);
}
function PrecioFinal () 
{
    //Declaracion de variables
    var precio1, precio2, precio3, total; 

    //Toma los numeros y los convierte a decimal
    precio1 = txtIdPrecioUno.value;
    precio1 = parseInt(precio1, 10);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseInt(precio2, 10);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseInt(precio3, 10);

    //Calcula el total con iva
    total = (precio1+precio2+precio3)*1.21;

    //Imprime el resultado con iva
    alert("El total neto de los productos es "+total)
}