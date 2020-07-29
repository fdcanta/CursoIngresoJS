/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	while (sexoIngresado != 'f' && sexoIngresado!= 'm'){
		sexoIngresado = prompt("ingrese f ó m .");
	}
	



	txtIdSexo.value=sexoIngresado;
	switch (sexoIngresado){
		case 'f':
			console.log("Ha elegido sexo femenino.");
			break;
		case 'm':
			console.log("Ha elegido sexo masculino.")
	}

}//FIN DE LA FUNCIÓN