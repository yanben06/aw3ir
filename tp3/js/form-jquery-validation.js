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
            
            //$(".modal-body").text("Bienvenue Yanis") ;
            $(".modal-title").text("Bievenue Yanis")
            $(".modal-body").html("vous êtes nés le" + $("#date").val() +'<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Arcueil&zoom=10&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/ width="90%" >' + "" +'<a href="https://www.google.com/maps/place/19+Rue+Guy+de+Gouyon-du-Verger,+94110+Arcueil/@48.8036305,2.324284,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6711a567a47d7:0x35307cc550fea4e0!8m2!3d48.803627!4d2.3264727" >Arcueil,Ile-De-France</a>' );

        }else{
            $(".modal-body").text("veuillez saisir tous les champs") ;

        }
        $('#myModal').modal("show");


    });

});