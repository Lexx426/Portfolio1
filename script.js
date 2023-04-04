
var menu_btn = document.querySelector('.hamburger');
var mobile_menu = document.querySelector('.mobile-nav');

function responsiveNav(){
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}


function removeMobileNav(){
    mobile_menu.classList.remove('is-active');
    menu_btn.classList.toggle('is-active');
};






var wasClicked = false;

function changePic1(element){
    
    if (!wasClicked){
        wasClicked = true;
        return;
    }
    if (element.getAttribute("src") == "./assets/ChickPick.JPG"){
        element.setAttribute("src", "./assets/kentucky.JPG");
    } else {
        element.setAttribute("src", "./assets/ChickPick.JPG")
    }
}

function changePic2(element){

    if (!wasClicked){
        wasClicked = true;
        return;
    }
    if (element.getAttribute("src") == "./assets/PoohMeetGreet.jpg"){
        element.setAttribute("src", "./assets/PoohBench.JPG");
    } else {
        element.setAttribute("src", "./assets/PoohMeetGreet.jpg")
    }
}

function changePic3(element){

    if (!wasClicked){
        wasClicked = true;
        return;
    }
    if (element.getAttribute("src") == "./assets/kotrynaProm.jpg"){
        element.setAttribute("src", "./assets/IcePic.JPG");
    } else {
        element.setAttribute("src", "./assets/kotrynaProm.jpg")
    }
}

// var btnFade = document.querySelector(".btn-transition");
var btnFade = document.getElementById("switch");
var cloud = document.querySelector("ul.cloud");
// var cloud = document.getElementById("word-cloud");
// targeting the entire  section, #word-cloud being the parent of ul.cloud




function fadeInCloud(){
    // btnFade.addEventListener("click", (event) =>{
        // cloud.classList.toggle("fadeIn");  // fade in is the original animation used

        cloud.classList.add("transition-active"); // does not show up 
        console.log(event.detail)

        // cloud.classList.toggle("transition-active"); // does not show up at all
    // })
}



$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});
