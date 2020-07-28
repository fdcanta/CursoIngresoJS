function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado){
		case 'Bariloche':
			console.log("Su destino esta al oeste.");
			break;
		case 'Cataratas':
			console.log("Su destino esta al norte.");
			break;
		case 'Mar del plata':
			console.log("Su destino esta al este.")
			break;
		case 'Ushuaia' :
			console.log("Su destino esta al sur.")
	}
	

}//FIN DE LA FUNCIÓN