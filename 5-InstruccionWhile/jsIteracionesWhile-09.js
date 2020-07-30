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


	//Mientras la respuesta sea seguir, se sigue
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado, 10);

		//Revisa si lo ingresado es un numero
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		/*El primer numero que se ingrese siempre va a ser el mas alto y el mas bajo, luego de eso los compara 
		normalmente*/
		if (cont==0){
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			cont++
		} else if (numeroIngresado>numeroMaximo){
			numeroMaximo = numeroIngresado;
		} else if (numeroIngresado<numeroMinimo){
			numeroMinimo = numeroIngresado;
		}

		//vacia la respuesta y la pide hasta que sea si o no
		respuesta = '';
		while(respuesta != 'si' && respuesta!='no'){
			respuesta = prompt("Desea continuar? si/no");
		}
	}

	//llena los campos con el numero mas alto y el mas bajo
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN