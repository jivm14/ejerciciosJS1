function listaNum()
{
	var numero = 11;
	var cont = 1;

	while (cont<=25){
		document.write(numero);
		
		if (cont<25) {
			document.write(' - ');
		}

		cont=cont+1;
		numero=numero+11;
	}
}
