var dateTime = new Date(),
    hour = dateTime.getHours();

var timeOfDay = "";

if (hour >= 4 && hour <= 11) {
    timeOfDay = "morning";
} else if (hour >= 12 && hour <= 16) {
    timeOfDay = "afternoon";
} else if (hour >= 17 && hour <= 24) {
    timeOfDay = "evening";
} else if (hour > 0 && hour < 4) {
    // Cross through with bold 
}

document.getElementsByClassName('time-of-day')[0].innerHTML = timeOfDay;
