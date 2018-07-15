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