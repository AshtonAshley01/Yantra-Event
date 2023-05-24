
// Set the countdown date (adjust the date as per your requirements)
var countdownDate = new Date("June 02, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
  // Get current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Countdown expired";
  }
}, 1000);