/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//se crean variables y se inicializan
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	numeroIngresado = 0;

	//Se continua mientras la respuesta de seguir sea 'si'
	while (respuesta=='si'){
		numeroIngresado = prompt("Ingrese un numero.")
		numeroIngresado = parseInt(numeroIngresado);

		//Se revisa que lo ingresado sea un numero
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		//Si es un numero positivo, lo suma a los positivos, si es negativo multiplica los negativos.
		if (numeroIngresado<0){
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		} else if (numeroIngresado>0){
			sumaPositivos = sumaPositivos+numeroIngresado;
		}

		//se vacia la respuesta de seguir y se pregunta si se desea seguir hasta que la respuesta sea si o no
		respuesta = '';
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no")
		}
	}

	//se llenan los campos con las sumas y multiplicaciones correspondientes
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN