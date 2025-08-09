
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
