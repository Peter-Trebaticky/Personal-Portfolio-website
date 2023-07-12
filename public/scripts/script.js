

document.addEventListener('DOMContentLoaded', function() {
  var languageTextElements = document.querySelectorAll('.language-text');

  languageTextElements.forEach(function(element) {
    element.textContent = element.getAttribute('data-sk');
  });
});

function changeLanguage() {
  var button = document.querySelector('.image-button');
  button.classList.toggle('clicked');

  var isChecked = button.classList.contains('clicked');
  var languageTextElements = document.querySelectorAll('.language-text');

  languageTextElements.forEach(function(element) {
    if (isChecked) {
      element.textContent = element.getAttribute('data-en');
    } else {
      element.textContent = element.getAttribute('data-sk');
    }
  });
}





// Presunúť na sekciu "home" po načítaní stránky
//window.addEventListener("load", function () {
//  document.documentElement.scrollTop = document.body.scrollTop = document.getElementById("home").offsetTop;
//});





// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
mybutton.style.display = "none";

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100 
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}





/**water effect */
$(document).ready(function(){
	    $(".full-landing-image").ripples({
        resolution: 400,
        perturbance: .008,
    });
});