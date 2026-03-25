const btn = document.querySelector(".secondary");
const cert = document.querySelector(".certificates");

btn.addEventListener("click", () => {
  cert.classList.toggle("hidden");
});


function toggleQuickMenu() {
  const menu = document.getElementById("quickMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}