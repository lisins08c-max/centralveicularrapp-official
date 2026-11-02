
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-current-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
});
