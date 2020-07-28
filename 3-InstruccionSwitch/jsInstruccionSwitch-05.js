function mostrar()
{
	//tomo la hora y la convierto en int
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia, 10);

	//reviso el caso de que sea de 7 a 11
	switch (horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			console.log("Es de mañana.");
			break;
	}
}//FIN DE LA FUNCIÓN