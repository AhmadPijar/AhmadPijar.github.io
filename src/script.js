// navbar fixed
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 1) {
    // Saat scroll lebih dari 50px, header berubah
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed"); // Kembali ke transparan saat di atas
  }
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navList.classList.toggle("hidden");
});

// dark theme
document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.querySelector("#theme-select");
  const body = document.body;
  const lightTheme = document.querySelector(".light-theme");
  const darkTheme = document.querySelector("#bg-video");

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      lightTheme.classList.add("hidden");
      darkTheme.classList.remove("hidden");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      lightTheme.classList.remove("hidden");
      darkTheme.classList.add("hidden");
    }
  }

  // Cek theme dari localStorage saat halaman dimuat
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    themeSelect.value = "light"; // Default ke light mode
    applyTheme("light");
  }

  // Event listener untuk mengubah tema
  themeSelect.addEventListener("change", function () {
    applyTheme(themeSelect.value);
  });
});

// project animation
const fade = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fade.forEach((project) => {
  observer.observe(project);
});
