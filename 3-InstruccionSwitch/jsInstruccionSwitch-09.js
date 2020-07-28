function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var descuento;
	var precio;
	precio = 15000;
	descuento = 0;

	switch (estacionIngresada){
		case 'Invierno':
			switch (destino){
				case 'Bariloche':
					descuento = 1.2;
					break;
				case 'Cataratas':
				case 'Cordoba':
					descuento = 0.9;
					break;
				case 'Mar del plata':
					descuento = 0.8;				
			}
		break;
		case 'Verano':
			switch (destino){
				case 'Bariloche':
					descuento = 0.8;
					break;
				case 'Cataratas':
				case 'Cordoba':
					descuento = 1.1;
					break;
				case 'Mar del plata':
					descuento = 1.2;				
			}
		break;
		case 'Otoño':
		case 'Primavera':
			switch (destino){
				case 'Bariloche':
					descuento = 1.1;
					break;
				case 'Cataratas':
					descuento = 1.1;
					break;
				case 'Cordoba':
					descuento = 1;
					break;
				case 'Mar del plata':
					descuento = 1.1;				
			}
		break;
	}

	precio = precio*descuento;
	console.log('El coste es de '+precio+'$');


}//FIN DE LA FUNCIÓN