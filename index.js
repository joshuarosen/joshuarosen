var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $("#header").css("background","#fff");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
    }else{
        $("#header").css("background","transparent");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
    }
}
}
  