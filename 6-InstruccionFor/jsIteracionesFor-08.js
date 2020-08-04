function mostrar()
{
	var num1;
	var num2;
	var bandera;
	num1=0;
	num2=0;
	bandera=0;
	

	num2 = prompt("Ingrese un numero.")
	while(isNaN(num2)){
		num2=prompt("Incorrecto. Ingrese solo un numero.")
	}

	for(num1=1;num1<=num2;num1++){
		if(num2%num1==0 && num1!=1 && num1!=num2){
			console.log("No es un numero primo.")
			bandera=1;
			break;
		}
	}

	if (bandera==0){
		console.log("Es un numero primo.")
	}

}//FIN DE LA FUNCIÓN