console.log("не нажато");
document.addEventListener('DOMContentLoaded', function () {
  console.log("addeventlistener");
  document.querySelector(".hamburger").onclick = (function (e) {
    e.preventDefault();
    console.log("нажато");
    document.querySelector(".hamburger-popups").classList.add("hamburger-popups__active");
  });
  
  document.querySelector(".hamburger-popups__close").onclick = (function (e) {
    e.preventDefault();
    console.log("нажато2");
    document.querySelector(".hamburger-popups").classList.remove("hamburger-popups__active");
  });

});