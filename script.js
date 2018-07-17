var dateTime = new Date(),
hour = dateTime.getHours();

var timeOfDay = "";

if (hour >= 4 && hour <= 11) {
timeOfDay = "morning";
} else if (hour >= 12 && hour <= 16) {
timeOfDay = "afternoon";
} else if (hour >= 17 && hour <= 20) {
timeOfDay = "evening";
}

document.getElementsByClassName('time-of-day')[0].innerHTML = timeOfDay;


function hideCv() {
    var cv = document.getElementsByClassName("cv")[0];
    cv.classList.add("cv-hide");
    
    var topRightOne = document.getElementsByClassName("top-right-one")[0];
    topRightOne.classList.add("move-down-one");
    
    var topRightTwo = document.getElementsByClassName("top-right-two")[0];
    topRightTwo.classList.add("move-down-two");

    var topRightThree = document.getElementsByClassName("top-right-three")[0];
    topRightThree.classList.add("move-up-three");
    
    var topRightFour = document.getElementsByClassName("top-right-four")[0];
    topRightFour.classList.add("move-up-four");
}

function showCv() {
    var cv = document.getElementsByClassName("cv")[0];
    cv.classList.remove("cv-hide");
    cv.classList.add("cv-show");

    var topRightOne = document.getElementsByClassName("top-right-one")[0];
    topRightOne.classList.remove("move-down-one");
    topRightOne.classList.add("move-up-one");

    var topRightTwo = document.getElementsByClassName("top-right-two")[0];
    topRightTwo.classList.remove("move-down-two");
    topRightTwo.classList.add("move-up-two");

    var topRightThree = document.getElementsByClassName("top-right-three")[0];
    topRightThree.classList.remove("move-up-three");
    topRightThree.classList.add("move-down-three");

    var topRightFour = document.getElementsByClassName("top-right-four")[0];
    topRightFour.classList.remove("move-up-four");
    topRightFour.classList.add("move-down-four");
}