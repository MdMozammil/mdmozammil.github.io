//Back to top //

(function(){
    var backTop = document.getElementsByClassName('js-cd-top')[0],
        // browser window scroll (in pixels) after which the "back to top" link is shown
        offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offsetOpacity = 1200,
        scrollDuration = 700
    scrolling = false;
    if( backTop ) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });
        //smooth scroll to top
        backTop.addEventListener('click', function(event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        ( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
        ( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }

    function scrollTop(duration) {
        var start = window.scrollY || document.documentElement.scrollTop,
            currentTime = null;

        var animateScroll = function(timestamp){
            if (!currentTime) currentTime = timestamp;
            var progress = timestamp - currentTime;
            var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
            window.scrollTo(0, val);
            if(progress < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    //class manipulations - needed if classList is not supported
    function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    function addClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.add(classList[0]);
        else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
        if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
    }
    function removeClass(el, className) {
        var classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);
        else if(hasClass(el, classList[0])) {
            var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className=el.className.replace(reg, ' ');
        }
        if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
    }
})();

//Slider for Testimonial//
(function($) {
    $.fn.rotateSlider = function(opt) {
        var $this = this,
            itemClass = opt.itemClass || 'rotateslider-item',
            arrowClass = opt.arrowClass || 'js-rotateslider-arrow',
            $item = $this.find('.' + itemClass),
            $arrow = $this.find('.' + arrowClass),
            itemCount = $item.length;


        var defaultIndex = 0;

        changeIndex(defaultIndex);

        $arrow.on('click', function() {
            var action = $(this).data('action'),
                nowIndex = $item.index($this.find('.now'));
            if(action == 'next') {
                if(nowIndex == itemCount - 1) {
                    changeIndex(0);
                } else {
                    changeIndex(nowIndex + 1);
                }
            } else if (action == 'prev') {
                if(nowIndex == 0) {
                    changeIndex(itemCount - 1);
                } else {
                    changeIndex(nowIndex - 1);
                }
            }
        });

        function changeIndex (nowIndex) {
            // clern all class
            $this.find('.now').removeClass('now');
            $this.find('.next').removeClass('next');
            $this.find('.prev').removeClass('prev');
            if(nowIndex == itemCount -1){
                $item.eq(0).addClass('next');
            }
            if(nowIndex == 0) {
                $item.eq(itemCount -1).addClass('prev');
            }

            $item.each(function(index) {
                if(index == nowIndex) {
                    $item.eq(index).addClass('now');
                }
                if(index == nowIndex + 1 ) {
                    $item.eq(index).addClass('next');
                }
                if(index == nowIndex - 1 ) {
                    $item.eq(index).addClass('prev');
                }
            });
        }
    };
})(jQuery);

//Header fixed//
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if(scroll >= 100){
            $('.main-nav, #menu-bar').addClass("white").css({"fill": "#000"});
            $('.main-nav').addClass("white");
        }
        else{
            $('.main-nav, #menu-bar').removeClass("white").css({"fill": "#fff"});
            $('.main-nav').removeClass("white");
        }

    });

});

//data counter//

(function($){
    $(window).on("load",function(){
        $(document).scrollzipInit();
        $(document).rollerInit();
    });
    $(window).on("load scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                numberRoller($(this).attr('data-slno'));
            },
            wholeVisible    :     false,
        });
    });
    $.fn.scrollzipInit=function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
    };
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
            $(this).attr('data-slno',i);
            $(this).addClass("roller-title-number-"+i);
        });
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                        ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
        var min=$('.roller-title-number-'+slno).attr('data-min');
        var max=$('.roller-title-number-'+slno).attr('data-max');
        var timediff=$('.roller-title-number-'+slno).attr('data-delay');
        var increment=$('.roller-title-number-'+slno).attr('data-increment');
        var numdiff=max-min;
        var timeout=(timediff*1000)/numdiff;
        //if(numinc<10){
        //increment=Math.floor((timediff*1000)/10);
        //}//alert(increment);
        numberRoll(slno,min,max,increment,timeout);

    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }
})(jQuery);


//Mega menu//
$('.menu-toggle').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.mega-menu').toggleClass('open');

    $(document).one('click', function closeMenu (e){
        if($('.mega-menu').has(e.target).length === 0){
            $('.mega-menu').removeClass('open');
        } else {
            $(document).one('click', closeMenu);
        }
    });
});




//Form Submit//

$(function () {
    $('.error').hide();
    $("#youth-form").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var college = $("#college").val();
        var city = $("#city").val();
        var phone_number = $("#phone_number").val();
        var mobile_number = $("#mobile_number").val();
        var which_year = $("#which_year").val();
        var course = $("#course").val();
        var interest = $("#interest").val();
        var internship_type = $("#internship_type").val();
        var internship_field = $("#internship_field").val();
        var role_model = $("#role_model").val();
        var check = $("#check:checked").val();
        var dataString = 'name='+ name + '&email=' + email + '&college=' + college + '&city=' + city + '&phone_number=' + phone_number + '&mobile_number=' + mobile_number + '&which_year=' + which_year + '&course=' + course + "&interest=" + interest + '&internship_type=' + internship_type + '&internship_field=' + internship_field + '&role_model=' + role_model;



        if(name === "" || email === "" || college === "" || city === "" || phone_number === "" || mobile_number === "" || which_year === "" || course === "" || interest === "" || internship_type === "" || internship_field === "" || role_model === "" || check === ""){
            $('.error').show();
            return false;
        }

        else{
            $('.error').hide();
        }

        $.ajax({
            type: "POST",
            url: 'data.php',
            data: dataString,
            success: function () {
                $('#youth-form').html("<div id='message' class='text-center'></div>");
                $('#message').html("<h2 class='text-center'>Thank you for contacting us </h2>").append("<p>We will get back to you</p>").show();
            },
            error: function(request, status, error){
                alert("Error: Could not delete");
            }
        });
        return false;
    });
});


//Removes br tag on mobile//

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('br', ".about-text > p").remove();
    } else {
        //...
    }
}

// $('.b-description_readmore_wrapper .js-description_readmore_wrapper\n').find('br').remove();

// jQuery(document).ready(function($) {
//     "use strict";
//     //  TESTIMONIALS CAROUSEL HOOK
//     $('#customers-testimonials').owlCarousel({
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 0,
//         // autoplay: true,
//         dots:true,
//         // autoplayTimeout: 8500,
//         // smartSpeed: 450,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             1170: {
//                 items: 3
//             }
//         }
//     });
// });


// $(function () {
//     $('.slider-text').hide();
//
//     if()
//
//     $('.rotateslider-item').find('.now');
//     $('.slider-text').show();
//
// });


//Dropdwon show hide//
$(function() {
    $('#locationselector').change(function(){
        $('.location').hide();
        $('#' + $(this).val()).show();
    });
});


/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
