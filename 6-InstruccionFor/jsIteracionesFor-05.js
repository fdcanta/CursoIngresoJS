function mostrar()
{
	var num1;
	var num2;
	num1=0;
	num2=0;

	for (;;){
		console.log("verificacion")
		num2 = prompt("Adivine el numero del 1 al 10!")
		while (isNaN(num2)||num2<1||num2>10){
			num2=prompt("Incorrecto, ingrese un numero entre 1 y 10!")
		}
		if (num2==9){
			document.write("Numero correcto!")
			break;}
	}

}//FIN DE LA FUNCIÓN