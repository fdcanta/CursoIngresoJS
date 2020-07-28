function mostrar()
{
	//Declaro variables y tomo el mes
	var mesDelAño =txtIdMes.value;
	var estacion;

	//Revisa que estacion corresponde al mes, filtrandolo
	if (mesDelAño == 'Enero' || mesDelAño == 'Febrero'|| mesDelAño == 'Diciembre'){
		estacion = 'Verano'
	} else if (mesDelAño == 'Marzo' || mesDelAño == 'Abril'|| mesDelAño == 'Mayo' || mesDelAño == 'junio'){
		estacion = 'Otoño'	
	} else if (mesDelAño == 'Julio' || mesDelAño == 'Agosto'){
		estacion = 'Invierno'
	} else if (mesDelAño == 'Septiembre' || mesDelAño == 'Octubre'|| mesDelAño == 'Noviembre'){
		estacion = 'Primavera'
	}
		
	
	//Basandose en la estacion, envia mensaje
	switch (estacion){
		case 'Verano':
			console.log("Ya paso el frio!");
			break;
		case 'Otoño':
			console.log("Se viene el frio!");
			break;
		case 'Primavera':
			console.log("Ya paso el frio!");
			break;
		case 'Invierno':
			console.log("El fio ha llegado, hagan las pases con sus dioses.");
			break;
		}



}