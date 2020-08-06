function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var bandera
	var solterosMayores;
	var solterasMayores;
	var temperaturaMaxima;
	var nacionalidadMaxima;
	var fiebreMayores;
	var edadCasadas;
	var casadas;
	edad=0;
	fiebreMayores=0;
	solterasMayores=0;
	respuesta = '';
	bandera=0;
	solterosMayores=0;
	casadas=0;
	edadCasadas=0;
	edadCasadas=parseInt(edadCasadas)
	fiebreMayores=parseInt(fiebreMayores)

	while (respuesta!='no'){
		nombre=prompt("Ingrese el nombre de la persona.")
		nacionalidad=prompt("Ingrese nacionalidad.")
		edad=prompt("Ingrese la edad de la persona, limite de 130 años.")
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0||edad>130){
			edad=prompt("Edad invalida. Ingrese la edad de la persona.")
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo. f-femenino m-masculino")
		while(sexo!='f'&&sexo!='m'){
			sexo=prompt("Invalido, ingrese f-femenino m-masculino")
		}
		estadoCivil=prompt("Ingrese estado civil. s-soltero c-casado v-viudo")
		while(estadoCivil!='s'&&estadoCivil!='c'&&estadoCivil!='v'){
			estadoCivil=prompt("Incorrecto, ingrese estado civil s-soltero c-casado v-viudo")
		}
		if(sexo=='m'&&estadoCivil=='s'&&edad>17){
			solterosMayores++;
		}else if(sexo=='f'&&estadoCivil=='s'||sexo=='f'&&estadoCivil=='v'){
			solterasMayores++;
		}
		
		temperatura=prompt("Ingrese la temperatura de la persona, entre 0 y 45.")
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<0||temperatura>45){
			temperatura=prompt("Temperatura invalida. Ingrese una temperatura entre 0 y 45.")
			temperatura=parseInt(temperatura);
		}
		if(bandera==0){
			temperaturaMaxima=temperatura;
			nacionalidadMaxima=nacionalidad;
			bandera=1;
		}
		if(temperatura>temperaturaMaxima){
			temperaturaMaxima=temperatura;
			nacionalidadMaxima=nacionalidad;
		}
		if(temperatura>38&&edad>59){
			fiebreMayores++;
		}
		if(sexo=='f'&&estadoCivil=='c'){
			casadas++;
			edadCasadas=edadCasadas+edad;
		}

		respuesta=prompt("Desea ingresar otra persona? si/no")
		while(respuesta!='si'&&respuesta!='no'){
			respuesta = prompt("Incorrecto. Desea añadir a otra persona? si/no")
		}
		if(respuesta=='no'){
			console.log("La nacionalidad de la persona con mas temperatura es "+nacionalidadMaxima)
			console.log("La cantidad de solteros mayores es "+solterosMayores)
			console.log("La cantidad de mujeres solteras o viudas es "+solterasMayores)
			console.log("La cantidad de mayores de edad con fiebre es "+fiebreMayores)
			if (casadas>0){
				edadCasadas=edadCasadas/casadas;
				console.log("El promedio de edad de las mujeres casadas es "+edadCasadas)
			} else{
				console.log("No hay mujeres casadas")
			}
			
		}
	}
}
