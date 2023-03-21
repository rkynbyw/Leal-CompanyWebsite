$(document).ready(function(){
    $("#form2").hide(); 
    $("#prev1").hide();
    $("#submit1").hide();


    $("#next1").click(function(){
        $("#next1").hide();
        $("#prev1").show();
        $("#submit1").show();

        $("#form1").hide();
        $("#form2").show();
    });

    $("#prev1").click(function(){
        $("#next1").show();
        $("#prev1").hide();
        $("#submit1").hide();
        

        $("#form2").hide();
        $("#form1").show();
    });
}); 