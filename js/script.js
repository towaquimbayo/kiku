$(document).ready(function(){
    // notification animation when clicked
    showAlert = function() {
        $('body').addClass('alert-show');
    }

    hideAlert = function() {
        $('body').removeClass('alert-show');
    }

    // auto show
    setTimeout(function() {
        showAlert();
    }, 1000);

    $(".close").click(function(){
        hideAlert();
    });

    // navbar bg color changes when scrolled down
    $(function() {
        $(document).scroll(function () {
            var $nav = $(".navbar.fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    // when scrolled, navbar shrinks
    window.onscroll = function(){
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.getElementById("myNav").style.padding = "0px 0";
            document.getElementById("logo").style.width = "50px";
            document.getElementById("logo").style.height = "50px";
        } 
        else {
            document.getElementById("myNav").style.padding = "25px 0px";
            document.getElementById("logo").style.width = "80px";
            document.getElementById("logo").style.height = "80px";
        }
    }

    // filter gallery
    if($('.btn-outline-dark').hasClass('active')){
        $('.imgCol').show('1000');
    }

    $('.btn-outline-dark').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.imgCol').show('1000');
        }
        else{
            $('.imgCol').not('.' + value).hide('1000');
            $('.imgCol').filter('.' + value).show('1000');
        }
    })

    $('.btn-outline-dark').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })    
    
});

// Google Maps API Integration
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.28354, lng: -123.11527};
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}