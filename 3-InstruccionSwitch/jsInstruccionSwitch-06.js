function mostrar()
{
	//tomo la hora y la convierto en int
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia, 10);

	//asigna a todo valor fuera de las 24 horas el valor 25
	if (horaDelDia<0 || horaDelDia>24){
		horaDelDia = 25;
	}

	//reviso la hora del dia
	switch (horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			console.log("Es de mañana.");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			console.log("Es de tarde.");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			console.log ("Es de noche.");
			break;
		case 25:
			console.log("Esa hora no existe.");

	}
}//FIN DE LA FUNCIÓN