function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	//Si es febrero, imprime un mensaje particular, sino uno predefinido
	switch (mesDelAño){
		case 'Febrero':
			console.log("Este mes tiene solo 29 dias.");
			break;
		default:
			console.log("Este mes tiene 30 dias o mas.");
	}
}//FIN DE LA FUNCIÓN