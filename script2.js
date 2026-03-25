// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}



/* const roles = [
  "Web Developer 💻",
  "Network Engineer 🌐",
  "Tech Enthusiast 🚀",
  "Problem Solver 🧠"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = roles[i];

  if (isDeleting) {
    document.getElementById("typing-text").textContent =
      currentText.substring(0, j--);
  } else {
    document.getElementById("typing-text").textContent =
      currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();*/
