$(document).ready(function () {
    $("form").on("submit", function (event) {
        event.preventDefault();
        if ($("#nom").val() < 1) {
            // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
            // voir plus : https://www.w3schools.com/js/js_htmldom.asp
            console.log("Veuillez remplir tous les champs");

            // Y mettre le code jQuery pour valider tous les champs du formulaire
            $('#myModal').modal("show");
        }

        if ($("#prenom").val() < 1) {
            // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
            // voir plus : https://www.w3schools.com/js/js_htmldom.asp
            console.log("Veuillez remplir tous les champs");

            // Y mettre le code jQuery pour valider tous les champs du formulaire
            $('#myModal').modal("show");
        }
        if ($("#adresse").val() < 1) {
            // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
            // voir plus : https://www.w3schools.com/js/js_htmldom.asp
            console.log("Veuillez remplir tous les champs");

            // Y mettre le code jQuery pour valider tous les champs du formulaire
            $('#myModal').modal("show");
        }
        if ($("#mail").val() < 1) {
            // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
            // voir plus : https://www.w3schools.com/js/js_htmldom.asp
            console.log("Veuillez remplir tous les champs");

            // Y mettre le code jQuery pour valider tous les champs du formulaire
            $('#myModal').modal("show");
        }

    });

});