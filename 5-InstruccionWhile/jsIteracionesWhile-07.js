/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';
	numeroIngresado = 0;

	while (respuesta=='si'){
		numeroIngresado = prompt("Ingrese un numero.")
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador = acumulador+numeroIngresado;
		contador++;
		respuesta = '';
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no")
		}
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN