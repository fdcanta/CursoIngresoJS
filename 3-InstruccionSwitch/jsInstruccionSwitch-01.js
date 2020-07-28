function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño){
		case 'Enero':
			console.log("Que comiences bien el año.");
			break;
		case 'Marzo':
			console.log("A clases.");
			break;
		case 'Julio':
			console.log("Se vienen las vacaciones");
			break;
		case 'Diciembre':
			console.log("Felices fiestas.");
			break;
		default:
			console.log("Algun mes sin relevancia en el olvido.")
	}
	



}//FIN DE LA FUNCIÓN