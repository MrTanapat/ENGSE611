document
  .getElementById("profile-img")
  .addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
  });

document
  .getElementById("close-popup")
  .addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });