function mostrar()
{

	var repeticiones;
	var num1;

	repeticiones = prompt("Ingrese numero de repeticiones.")
	while (isNaN(repeticiones)){
		repeticiones = prompt("Ingrese un numero valido.")
	}

	for(num1=0; num1<repeticiones; num1++){
		document.write("Hola UTN FRA.")
		document.write("<br>")
	}


}//FIN DE LA FUNCIÓN