function mostrar()
{
	//se crean las variables
	var num1;
	var num2;
	var num3;
	var conf;
	var max;
	var min;

	//se asignan las variables
	var max = 52;
	var min = 1;
	conf = 0;
	
	//Genero el número aleatorio entre 1 y 10 
	num1 = min + Math.floor((max - min) * Math.random());
	num2 = min + Math.floor((max - min) * Math.random());

	/*Revisa si son pares o impares y realiza la accion correspondiente antes de presentarla, 
	ademas de usar una confirmacion de que se realizo una operacion*/ 
	if ((num1%2==0) && (num2%2==0)){
		num3 = num1*num2;
		console.log("los numeros son pares y su multiplicacion es  "+num3);
		conf =1;	
	} else {
		if ((num1%2!=0)&&(num1%2!=0)){
			num3=num1-num2;
			console.log("Los numeros son impares y su resta es "+num3);
			conf = 1;	
		}
	}
	
	//Revisa si un numero es multiplo de 5 y lo eleva al cubo, ademas de tener una confirmacion
	if (num1%5==0){
		num3 = Math.pow(num1, 3);
		console.log("El numero es divisible por 5 y su cubo es "+num3);
		conf =1;	
	}else{
		if (num2%5==0){
		num3 = Math.pow(num2, 3);
		console.log("El numero es divisible por 5 y su cubo es "+num3);
		conf =1;
		}
	}

	if (conf==0){
		console.log("No paso nada.");
	}

}//FIN DE LA FUNCIÓN