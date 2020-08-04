function mostrar()
{
	var num1;
	var num2;
	var repeticiones;
	num1=0;
	num2=0;

	repeticiones = prompt("Ingrese el numero de repeticiones.")
	while (isNaN(repeticiones)){
		repeticiones = prompt("Incorrecto. Ingrese solo un numero.")
	}

	for (num1=1; num1<=repeticiones; num1++){
		if (num1%2==0){
			console.log(num1)
			num2++
		}
	}

	console.log("la cantidad de numeros pares es "+num2)
	



}//FIN DE LA FUNCIÓN