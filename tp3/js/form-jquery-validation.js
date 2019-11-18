$( document ).ready(function() {
    document.querySelector(".modal-body").innerHTML = '<img src="map.jpg"/>' // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     $(".modal-body").html('<img src="map.jpg"/>');// Y mettre le code jQuery pour valider tous les champs du formulaire
 });