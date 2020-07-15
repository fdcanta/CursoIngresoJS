/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe, resultado;

	/*Se consigue el importe*/
	importe= prompt("Ingrese importe");
	txtIdImporte.value = importe;

	/*Se convierte en numero*/
	importe = parseInt(importe, 10);
	
	/*Se aplica descuento*/
	txtIdResultado.value= importe-(importe*0.25);

	alert("Descuento aplicado");
}
