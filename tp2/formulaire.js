<script type="text/javascript" src="formulaire.js"></script>
function Validation() {

if(document.getElementById("TxtNom").value.length<5)
return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
if(document.getElementById("TxtPrenom").value.length<5)
return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
if(document.getElementById("TxtAdresse").value.length<5)
return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
if(document.getElementById("email").value.length<5)
return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";

if(document.getElementById("TxtNom").value.length>=5 &&
document.getElementById("TxtPrenom").value.length>=5 &&
document.getElementById("TxtAdresse").value.length>=5 &&
document.getElementById("email").value.length>=5)
renturn document.getElementById("resultat").innerHTML = "Bienvenue";
}