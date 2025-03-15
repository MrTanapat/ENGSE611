// Selecting the button element
let button = document.getElementById("changeStyleButton");

// Adding an event listener to the button
button.addEventListener("click", function () {
  // Selecting the paragraph element
  let paragraph = document.getElementById("example");

  // Changing CSS styles dynamically
  paragraph.style.backgroundColor = "#F1F0E9";
  paragraph.style.fontSize = "22px";
  paragraph.style.color = "#0D4715";
  paragraph.style.border = "2px solid black";
  paragraph.style.borderRadius = "5px";
  paragraph.style.padding = "15px";
});

// Back button functionality
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.location.href = "/index.html";
});