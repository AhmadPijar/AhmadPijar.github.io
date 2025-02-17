const menuNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  menuNav.classList.toggle("hamburger-active");
};
menuNav.addEventListener("click", () => toggleNav());
