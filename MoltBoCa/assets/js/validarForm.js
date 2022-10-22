function validarForm() {
	if (document.getElementById("name").value == "") {
		alert("Escriu el teu nom, siusplau!");
		return false; }
		
		if (document.getElementById("message").value == "") {
		alert("Escriu l'assumpte del missatge!")	
		return false;}
	
	if (document.getElementById("subject").value == "") {
		alert("Escriu el contingut del missatge!")	
		return false; }
		else { alert("Tot correcte!")}
		}