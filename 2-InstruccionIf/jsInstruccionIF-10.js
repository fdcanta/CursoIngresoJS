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

	//los revisa y avisa la franja de num1
	if (num1>8){
		console.log("su nota es "+num1+", excelente!");
	} else {
	if (num1>4){
		console.log("su nota es "+num1+", aprobó.");
	} else {
		console.log("su nota es "+num1+". La proxima será.");
	}
	}
	
}//FIN DE LA FUNCIÓN