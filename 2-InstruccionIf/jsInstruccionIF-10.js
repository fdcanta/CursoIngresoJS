function mostrar()
{
	//se crean las variables
	var num1;
	
	//Genero el número RANDOM entre 1 y 10 
	num1 = Math.ceil(Math.random(10) * 10)
	

	//los revisa y avisa la franja de num1
	if (num1>8){
		alert("su nota es "+num1+", excelente!");
	} else {
	if (num1>4){
		alert("su nota es "+num1+", aprobó.");
	} else {
		alert("su nota es "+num1+". La proxima será.");
	}
	}
	
}//FIN DE LA FUNCIÓN