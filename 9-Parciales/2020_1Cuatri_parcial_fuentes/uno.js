
function mostrar()
{
var compras;
var barbijos;
var alcohol;
var jabon;
var precio;
var unidades;
var marca;
var fabricante;
var pedido;
var bandera;
var alcoholCompra;
var jabonCompra;
var barbijosCompra;
var promedio;
promedio=0;
alcoholCompra=0;
jabonCompra=0;
barbijosCompra=0;
alcoholBaratoPrecio;
alcoholBaratoFabricante;
bandera=0;
compras=0;

while (compras<5){
	pedido=prompt("Ingrese el tipo de producto: a-Alcohol, b-Barbijos, c-jabon")
	while (pedido!='a'&&pedido!='b'&&pedido!='c'){
		pedido=prompt("Incorrecto, ingrese un tipo de compra valido: a-Alcohol, b-Barbijos, c-jabon ")
	}
	precio =prompt("Ingrese el precio. Entre 100 y 300")
	precio=parseInt(precio)
	while (isNaN(precio)||precio<100||precio>300){
		precio=prompt("Precio invalido, ingrese un precio entre 100 y 300")
		precio=parseInt(precio)
	}
	unidades=prompt("Ingrese el numero de unidades, tope 1000")
	while (isNaN(unidades)||unidades<1||unidades>1000){
		unidades=prompt("numero incorrecto, elija el numero de unidades, tope 1000")
	}
	marca=prompt("Ingrese marca.")
	fabricante=prompt("ingrese fabricante")
	if (pedido='a'&&bandera==0){
		alcoholBaratoPrecio=precio;
		alcoholBaratoFabricante=fabricante;
		bandera++;
	} else if(pedido='a'&&precio<alcoholBaratoPrecio){
		alcoholBaratoPrecio=precio;
		alcoholBaratoFabricante=fabricante;
	}
	if (pedido='c'){

	}
	switch(pedido){
		case 'a':
			alcohol+=unidades;
			alcoholCompra++;
			break;
		case 'b':
			barbijos+=unidades;
			barbijosCompra++;
			break;
		case 'c':
			jabon+=unidades;
			jabonCompra++;
			break;
	}


compras++;
}

if (alcohol>barbijos&&alcohol>jabon){
promedio=alcohol/alcoholCompra;
} else if (barbijos>jabon){
promedio=barbijos/barbijosCompra;
} else{
promedio=jabon/jabonCompra;
}
console.log("El jabon mas barato es el de "+alcoholBaratoFabricante+" y su precio es "+alcoholBaratoPrecio)
console.log("Del tipo mas comprado de productos, el promedio por compra es "+promedio)
console.log("La cantidad de jabones compradas es "+jabon)



}