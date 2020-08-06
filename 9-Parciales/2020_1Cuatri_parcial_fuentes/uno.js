
function mostrar()
{
	var fabricante;
	var unidadesBarbijo;
	var unidadesAlcohol;
	var unidadesJabon;
	var marca;
	var compras;
	var producto;
	var precio;
	var totalBarbijos;
	var totalJabon;
	var totalAlcohol;
	var bandera;
	var jabCaroUnidades;
	var jabCaroFabricante;
	var mayorProducto;
	var mayorNum;
	totalBarbijos=0;
	unidadesBarbijo=0;
	unidadesAlcohol=0;
	unidadesJabon=0;
	compras = 0;

	prompt("que esta pasando");
	
	while(compras<5){
		precio = 0;
		producto = prompt("Elija un tipo de producto: Barbijo, Jabon, Alcohol.");
		producto.toUpperCase();
		while (producto != "BARBIJO" && producto!= "JABON" && producto!= "ALCOHOL"){
			producto = prompt("Incorrecto, ingrese un tipo de producto valido: Barbijo, Jabon, Alcohol");
			producto.toUpperCase();
		}
		marca=prompt("ingrese marca.");
		fabricante = prompt("ingrese el fabricante.")
		precio= prompt("Ingrese precio, entre 100 y 300.")
		while (isNaN(precio) || precio<100 || precio>300){
			precio=prompt("Precio invalido, igrese nuevo precio, entre 100 y 300.")
		}
		switch (producto){
			case 'BARBIJO':
				unidadesBarbijo=prompt("Ingrese el numero de unidades, maximo 1000");
				while(isNaN(unidadesBarbijo)||unidadesBarbijo<1||unidadesBarbijo>1000){
					unidadesBarbijo = prompt("Incorrecto, ingrese un numero de unidades entre 1 y 1000")
				}
				totalBarbijos = totalBarbijos+unidadesBarbijo;
				break;
			case 'JABON':
				unidadesJabon=prompt("Ingrese el numero de unidades, maximo 1000");
				while(isNaN(unidadesJabon)||unidadesJabon<1||unidadesJabon>1000){
					unidadesJabon = prompt("Incorrecto, ingrese un numero de unidades entre 1 y 1000")
				}
				if (bandera=0){
					precioMax=precio;
					bandera=1;
					jabCaroFabricante=fabricante;
					jabCaroUnidades=unidadesJabon;
				} else if (bandera!=0){
					if (precio>precioMax){
						precioMax=precio;
						jabCaroUnidades=unidadesJabon;
						jabCaroFabricante=fabricante;
					}
				}
				totalJabon = totalJabon+unidadesJabon;
			case 'ALCOHOL':
				unidadesAlcohol=prompt("Ingrese el numero de unidades, maximo 1000");
				while(isNaN(unidadesAlcohol)||unidadesAlcohol<1||unidadesAlcohol>1000){
					unidadesJabon = prompt("Incorrecto, ingrese un numero de unidades entre 1 y 1000")
				}
				totalAlcohol = totalAlcohol+unidadesAlcohol;
		}
		compras++;
		if (totalJabon>totalBarbijos||totalJabon>totalAlcohol){
			mayorProducto="Jabon";
			mayorNum=totalJabon;
		} else if(totalBarbijos>totalAlcohol){
			mayorProducto="Barbijos";
			mayorNum = totalBarbijos;
		}else{
			mayorProducto = "Alcohol"
			mayorNum = totalAlcohol;
		}
	} 

	console.log("El total de barbijos es "+totalBarbijos);
	console.log("El proucto mas comprado fue "+mayorProducto+", con un promedio de compra de "+mayorNum/5)
}
