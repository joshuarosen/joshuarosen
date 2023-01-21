var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $("#header").css("background","#fff");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","3vh 4vw");
    }else{
        $("#header").css("background","transparent");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","3vh 4vw");
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  