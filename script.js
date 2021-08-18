const nav = document.querySelector("aside");
const nav_btn = document.querySelector(".check-btn");
const links = document.querySelectorAll(".links ul li a")

nav_btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    nav_btn.classList.toggle("active");
})

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        nav_btn.classList.remove("active")
    })
})