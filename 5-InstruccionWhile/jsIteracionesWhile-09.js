/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var cont;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	cont= 0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado, 10);
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		if (cont==0){
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			cont++
		} else if (numeroIngresado>numeroMaximo){
			numeroMaximo = numeroIngresado;
		} else if (numeroIngresado<numeroMinimo){
			numeroMinimo = numeroIngresado;
		}

		respuesta = '';
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no");
		}
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN