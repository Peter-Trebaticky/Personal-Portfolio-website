///fade effect
$('.fadeelement')
  .hide()
  .fadeIn(2500);

///language/image change
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

// refresh 
window.addEventListener("load", function () {
 document.documentElement.scrollTop = document.body.scrollTop = document.getElementById("home").offsetTop;
});

// back to top
let mybutton = document.getElementById("btn-back-to-top");
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
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/// sidebar
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}


function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


/*nav-panel background scroll*/
window.addEventListener("scroll", function () {
  var scrollOffset = window.scrollY;
  var navigacia = document.querySelector(".nav-panel");
  navigacia.style.backgroundPositionY = -scrollOffset + "px";
});

//progress bar
function fillProgressBar(progressBar) {
  var progressFill = progressBar.querySelector(".progress");
  var fillAmount = progressBar.dataset.fill;

  progressFill.style.width = fillAmount + "%";
}

function handleScroll() {
  var progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(function (progressBar) {
    var progressBarPosition = progressBar.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (progressBarPosition < windowHeight) {
      fillProgressBar(progressBar);
    }
  });
}
window.addEventListener("scroll", handleScroll);


/*modal-email*/
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
document.addEventListener("DOMContentLoaded", function () {
  const mailStatus = getQueryParam("mailStatus");
  if (mailStatus === "success") {
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    setTimeout(function () {
      modal.style.display = "none";
    }, 3000);
  }
});


