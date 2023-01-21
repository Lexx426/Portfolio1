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

var btnFade = document.querySelector(".btn-transition");
var cloud = document.querySelector("ul.cloud");

fadeInCloud();

function fadeInCloud(){
    btnFade.addEventListener("click", () =>{
        cloud.classList.toggle("fadeIn");
    })
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
