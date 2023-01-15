// slide-in
window.onload = function () {
  var elements = document.getElementsByClassName("slide-in");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animation = "slide-in 0.4s forwards " + i * 0.1 + "s";
  }
};

// slide-left
window.onload = function () {
  var elements = document.getElementsByClassName("slide-left");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animation = "slide-left 0.5s forwards " + i * 0.1 + "s";
  }
};

// slide-right
window.onload = function () {
  var elements = document.getElementsByClassName("slide-right");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animation = "slide-right 0.5s forwards " + i * 0.1 + "s";
  }
};
