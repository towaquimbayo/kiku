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

// filter gallery
filterSelection("all");

// filter category
function filterSelection(cat) {
    var x = document.getElementsByClassName("imgCol");
    var i;
    if (cat == "all"){
        cat = "";
    }

    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(cat) > -1){
            w3AddClass(x[i], "show");
        } 
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var arr1 = element.className.split(" "); 
    var arr2 = name.split(" ");

    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn btn-outline-dark");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "HAHAH");
        this.className += " active";
    });
}

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