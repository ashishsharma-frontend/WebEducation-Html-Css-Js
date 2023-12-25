/* JavaScript code */
// This code handles the functionality of the navigation menu and running text animation.

// Navigation menu toggle
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

// Close menu on scroll
window.onscroll = () => {
menu.classList.remove('fa-times');
navbar.classList.remove('active');
}

// Running Text Animation JavaScript

// Array of text to display
const text = ["Building Bright Futures !", "Explore Coding Skills !", "Upgrade your skill !"];
const speed = 150; // Speed of text animation in milliseconds
let index = 0;
let letterIndex = 0;
let runningText = "";

// Function to run the text animation
function runText() {
if (letterIndex === 0) {
runningText = "";
}

runningText += text[index][letterIndex];
document.getElementById("running-text").innerHTML = "<h3>" + runningText + "</h3>";

letterIndex++;

if (letterIndex === text[index].length) {
index++;
if (index === text.length) {
index = 0;
}
letterIndex = 0;
}

setTimeout(runText, speed);
}

runText();

// Function to toggle the visibility of a list
// function toggleList(listNumber) {
// var list = document.getElementById("list" + listNumber);
// list.classList.toggle("active");
// }



