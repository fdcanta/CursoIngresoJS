/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	numeroIngresado = 0;

	while (respuesta=='si'){
		numeroIngresado = prompt("Ingrese un numero.")
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado<0){
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		} else if (numeroIngresado>=0){
			sumaPositivos = sumaPositivos+numeroIngresado;
		}
		respuesta = '';
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no")
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN