function numMayor() {
		
		var iNumeroMayor, iPosicion;
		var numero =  prompt('Ingrese un valor numerico:');
		var num = parseInt(numero);
	
		var listaNumeros = [];
		listaNumeros[0] = num;

		do {	
			numero =  prompt('Ingrese un valor (0 para finalizar):');
			num = parseInt(numero);
			listaNumeros.push(num);	
		} while (num != 0);
		
		//Presuponemos que el numero mayor es el primero
		iNumeroMayor = listaNumeros[0];
		iPosicion = 0;
		
		for (var i=1;i<listaNumeros.length;i++){				
			if (listaNumeros[i]>iNumeroMayor){
				iNumeroMayor = listaNumeros[i];
				iPosicion = i;
			}
		}
		
		document.write("El n&uacute;mero mayor es " + iNumeroMayor + ".");	 
}
