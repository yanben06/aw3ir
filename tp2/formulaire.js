function Validation() {

    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.visibility = "visible"; 
    
    document.getElementById("resultat").innerHTML = ""; 
    document.getElementById("resultat").style.visibility = "hidden"; 

    if (document.getElementById("txtNom").value.length < 5)
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    if (document.getElementById("txtPrenom").value.length < 5)
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
    if (document.getElementById("txtAdresse").value.length < 5)
        document.getElementById("error").innerHTML = "La saisie du adresse est obligatoire";
    if (document.getElementById("email").value.length < 5)
        document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";

    if (document.getElementById("txtNom").value.length >= 5 &&
        document.getElementById("txtPrenom").value.length >= 5 &&
        document.getElementById("txtAdresse").value.length >= 5 &&
        document.getElementById("email").value.length >= 5) { 
            document.getElementById("resultat").innerHTML = document.querySelector("#TxtNom").value; 
            document.getElementById("resultat").style.visibility = "visible"; 
            document.getElementById("error").style.visibility = "hidden"; 

        }
}