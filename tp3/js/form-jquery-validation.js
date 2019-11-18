$(document).ready(function () {
    $("form").on("submit", function (event) {
        var error = "";
        event.preventDefault();
        if ($("#nom").val() < 1) {
            error += "veuillez saisir votre nom";
            // $(".modal-body").text("veuillez saisir votre nom");
            
            // $('#myModal').modal("show");
        }

        if ($("#prenom").val() < 1) {
            error += "veuillez saisir votre nom";
            $(".modal-body").text("veuillez saisir votre prenom");
            $('#myModal').modal("show");
        }
        if ($("#adresse").val() < 1) {
            error += "veuillez saisir votre nom";
            // $(".modal-body").text("veuillez saisir votre adresse");
            $('#myModal').modal("show");
        }
        if ($("#mail").val() < 1) {
            error += "veuillez saisir votre nom";
            //$(".modal-body").text("veuillez saisir votre mail");
            $('#myModal').modal("show");
        }
        if(error == ""){
            $(".modal-body").text("Bienvenue Yanis") ;
        }

    });

});