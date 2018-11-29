
//Header fixed//
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if(scroll >= 1){
            $('.main-nav, #menu-bar').addClass("white").css({"fill": "#000"});
        }
        else{
            $('.main-nav, #menu-bar').removeClass("white").css({"fill": "#fff"});
        }

    });

});


//Mega menu//
$(function() {
    $(document).ready(function() {
        let menuToggle = $(".menu-toggle");
        let menuHeight = $('#main-nav').height();
        console.log(menuHeight);

        menuToggle.click(function(e) {
            e.preventDefault();
            $(".mega-menu").toggleClass('open');
        });


        if ($(".mega-menu").hasClass('open')) {
            $('body').addClass("fixedPosition");
        } else {
            $('body').removeClass("fixedPosition");
        }
    });
});


$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});



//Loader//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility="hidden";
        },1000);
    }
};