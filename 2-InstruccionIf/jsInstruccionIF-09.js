function mostrar()
{
	//se crean las variables
	var num1;
	var max;
	var min;

	//se asignan las variables
	var max = 11;
	var min = 1;
	
	//Genero el número aleatorio entre 1 y 10 
	num1 = min + Math.floor((max - min) * Math.random())

	//lo muestra en consola
	console.log("El numero es "+num1);	

}//FIN DE LA FUNCIÓN