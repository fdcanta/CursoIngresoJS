/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var numCeros=0;
	var numPositivos=0;
	var numNegativos=0;
	var numPares=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado, 10);
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Invalido, ingrese solo un numero.")
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado == 0){
			numCeros++;
		} else if (numeroIngresado>0){
			numPositivos++;
			sumaPositivos = sumaPositivos+numeroIngresado;
			if (numeroIngresado%2==0){
				numPares++;
			}
		} else if (numeroIngresado<0){
			numNegativos++;
			sumaNegativos = sumaNegativos+numeroIngresado;
			if (numeroIngresado%2==0){
				numPares++
			}
		}
		respuesta = '';
		while(respuesta !='si' && respuesta !='no'){
			respuesta = prompt("Desea continuar? si/no");
		}
	}//fin del while

	console.log("La cantidad de numeros negaticos es "+numNegativos);
	console.log("la suma de negativos es :"+sumaNegativos);
	console.log("La cantidad de positivos es "+numNegativos)
	console.log("la suma de positivos es :"+sumaPositivos);
	console.log("la cantidad de 0 es :"+numCeros);
	console.log("la diferencia entre positivos y negativos es "+(sumaPositivos+sumaNegativos));
}//FIN DE LA FUNCIÓN