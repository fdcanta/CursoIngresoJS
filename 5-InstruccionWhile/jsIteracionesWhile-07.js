/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//crea variables y las inicializa
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';
	numeroIngresado = 0;


	//mientras se siga eligiendo seguir, se siguen tomando numeros
	while (respuesta=='si'){
		numeroIngresado = prompt("Ingrese un numero.")
		numeroIngresado = parseInt(numeroIngresado);
		
		//Se corrobora que sean numeros
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}

		//Se suman los numeros ingresados y se vacia la respuesta de seguir, el contador de numeros ingrsados aumenta
		acumulador = acumulador+numeroIngresado;
		contador++;
		respuesta = '';

		//se pide confirmacion de continuar hasta que la respuesta sea si o no
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no")
		}
	}

	//se llenan los campos de la pantalla con los valores resultantes, se saca el promedio
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN