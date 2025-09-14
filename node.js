// Contact form popup
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you, Alisha will get back to you soon!");
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", revealSections);
