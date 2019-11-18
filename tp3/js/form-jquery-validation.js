$( document ).ready(function() {
    
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     if (document.getElementById("nom").value.length<0 &&
        document.getElementById("prenom").value.length <0 &&
        document.getElementById("adresse").value.length <0 &&
        document.getElementById("mail").value.length <0 )
        document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";

    // Y mettre le code jQuery pour valider tous les champs du formulaire
 });