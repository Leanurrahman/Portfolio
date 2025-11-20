document.addEventListener("DOMContentLoaded", () => {
  // Typed.js
  if (window.Typed) {
    new Typed("#typed-text", {
      strings: [
        "I'm a Frontend Developer.",
        "I build modern web UIs.",
        "I love Tailwind CSS & JS.",
        "Open to internship offers."
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1600,
      loop: true,
    });
  }

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  const toggleMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
      isMenuOpen = !isMenuOpen;
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (isMenuOpen) toggleMenu();
      });
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });

  // Theme toggle
  const html = document.getElementById("html-theme");
  const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    html.classList.add("dark");
  }

  // Toggle theme
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      const currentTheme = html.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});