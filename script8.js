function desglose() {
	
	// Variables
	var cantidad = prompt("Introduce el importe");
	var billetes500 = 0, billetes200 = 0, billetes100 =  0, billetes50 = 0, billetes20 = 0, billetes10 = 0, billetes5 = 0; 
	var monedas1 = 0, monedas2 = 0; 
	
	document.write('La cantidad de ' + cantidad + '€ se desglosa en: <br />');
	
	while (cantidad>0) {
		
		if(cantidad%500 == 0) {
			cantidad-= 500;
			billetes500+= 1; 
		
		} else if(cantidad%200 == 0) {
			cantidad-= 200;
			billetes200+= 1;
			
		}  else if(cantidad%100 == 0) {
			cantidad-= 100;
			billetes100+= 1;
		
		}  else if(cantidad%50 == 0) {
			cantidad-= 50;
			billetes50+= 1;
		
		}  else if(cantidad%20 == 0) {
			cantidad-= 20;
			billetes20+= 1;
		
		}  else if(cantidad%10 == 0) {
			cantidad-= 10;
			billetes10+= 1;
		
		}  else if(cantidad%5 == 0) {
			cantidad-= 5;
			billetes5+= 1;
		
		}  else if(cantidad%2 == 0) {
			cantidad-= 2;
			monedas2+= 1;
		
		} else if(cantidad%1 == 0) {
			cantidad-= 1;
			monedas1+= 1;
		} 
		
	}
		
	// Mostrar cantidad de billetes y monedas usadas
	
	if(billetes500 > 0) { 
		document.write('Billetes de 500€: ' + billetes500 + '<br />'); 
	} 
	if(billetes200 > 0) { 
		document.write('Billetes de 200€: ' + billetes200 + '<br />'); 
	} 
	if(billetes100 > 0) { 
		document.write('Billetes de 100€: ' +billetes100+ '<br />'); 
	} 
	if(billetes50 > 0) { 
		document.write('Billetes de 50€: ' + billetes50 + '<br />'); 
	} 
	if(billetes20 > 0) { 
		document.write('Billetes de 20€: ' + billetes20 + '<br />'); 
	} 
	if(billetes10 > 0) { 
		document.write('Billetes de 10€: ' + billetes10 + '<br />'); 
	} 
	if(billetes5 > 0) { 
		document.write('Billetes de 5€: ' + billetes5 + '<br />'); 
	} 
	if(monedas2 > 0) { 
		document.write('Monedas de 2€: ' + monedas2 + '<br />'); 
	} 
	if(monedas1 > 0) { 
		document.write('Monedas de 1€: ' + monedas1 + '<br />'); 
	}
}