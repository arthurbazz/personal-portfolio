// navbar sticky
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--sticky");
  } else {
    navbar.classList.remove("navbar--sticky");
  }
});
