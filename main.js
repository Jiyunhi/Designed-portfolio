/*header gnb*/

$("#header #menu li").click( function(){
    var da = $(this).attr("data-anchor");
       $(".fp-viewing-"+da+" #header #menu li").addClass("active").siblings("li").removeClass("active");
});
