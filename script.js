// Smooth scroll to sections
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in effect on scroll
const faders = document.querySelectorAll("section");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  section.classList.add("fade-element");
  appearOnScroll.observe(section);
});

// Navbar shadow & scroll-to-top button
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    scrollBtn.style.display = "block";
  } else {
    nav.style.boxShadow = "none";
    scrollBtn.style.display = "none";
  }
});

// Scroll to top on button click
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle dark mode
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("toggle-mode");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});
