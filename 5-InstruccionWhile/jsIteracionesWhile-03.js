/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var cont=0;

	while (claveIngresada != 'utn750'&& cont<4){
		claveIngresada = prompt("ingrese el número clave.");
		cont++
		if (claveIngresada == "utn750"){
			console.log("Acceso concedido. No hay marcha atras.")
		}
	}
	
	
}//FIN DE LA FUNCIÓN
