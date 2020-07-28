function mostrar()
{
	//Declaro variables y tomo el mes
	var mesDelAño =txtIdMes.value;
	var dias;

	//revisa que mes es y cuantos dias tiene
	if (mesDelAño== 'Abril' || mesDelAño == 'Junio' || mesDelAño== 'Septiembre' || mesDelAño== 'noviembre') {
		dias = 30;
	} else if (mesDelAño == 'Febrero'){
		dias = 29;
	}
	
	switch (dias){
		case 30:
			console.log("El mes tiene 30 dias");
			break;
		case 29:
			console.log("El mes tiene 29 dias");
			break;
		default:
			console.log("el mes tiene 31 dias")
	}
}//FIN DE LA FUNCIÓN