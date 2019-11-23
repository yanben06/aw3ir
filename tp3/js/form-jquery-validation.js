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
            error += "veuillez saisir votre prenom";
            $(".modal-body").text("veuillez saisir votre prenom");
            $('#myModal').modal("show");
        }
        if ($("#adresse").val() < 1) {
            error += "veuillez saisir votre adresse";
            // $(".modal-body").text("veuillez saisir votre adresse");
            $('#myModal').modal("show");
        }
        if ($("#mail").val() < 1) {
            error += "veuillez saisir votre mail";
            //$(".modal-body").text("veuillez saisir votre mail");
        }
        if(error == ""){
            $(".modal-body").text("Bienvenue Yanis") ;
            $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Arcueil&zoom=10&size=400x3000&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/ width="90%" >');

        }else{
            $(".modal-body").text("veuillez saisir tous les champs") ;

        }
        $('#myModal').modal("show");


    });

});