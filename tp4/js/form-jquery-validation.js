$(document).ready(function () {
    $("form").on("submit", function (event) {
        var error = "";
        var a ="https://maps.googleapis.com/maps/api/staticmap?markers="+$("#adresse").val()+ "&zoom=10&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"
        var b="https://www.google.com/maps/place/"+ $("#adresse").val()+ "/@48.8036305,2.324284,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6711a567a47d7:0x35307cc550fea4e0!8m2!3d48.803627!4d2.3264727"
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
            $(".modal-body").html("je suis né le "+ $("#date").val()+ " et j'habite à " +'<img src= "' +a+ '"  width="90%" >' + "" +'<a href='+ b+ '><br>'+$("#adresse").val()+'</a>' );
           
        }else{
            $(".modal-body").text("veuillez saisir tous les champs") ;

        }
        $('#myModal').modal("show");


    });
    $( "#formulaire" ).keyup(function() {
        $("#nbcr1").text($("#nom").val().length+ "car")
             
    });
    $("#submit").click(function(){
        contactStore.add(_name, _firsname, _date, _adress, _mail);
        contactStore.getList();
        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
        '<tr><td>'+$("#nom").val()+'</td><td>'+$("#prenom").val()+$("#date").val()+$("#adresse").val()+$("#mail").val()+'</td><td>';
    });
        
});
