AOS.init();

const nav = document.querySelector("aside");
const nav_btn = document.querySelector(".check-btn");
const links = document.querySelectorAll(".links ul li a")

nav_btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    nav_btn.classList.toggle("active");
})

links.forEach(link => {
    link.addEventListener("click", (e) => {
        nav.classList.remove("active");
        nav_btn.classList.remove("active");
        colorSwap(e)
    })
})

const colorSwap = (e) => {
    links.forEach(link => {
        link.classList.remove("active");
    })
    e.target.classList.add("active")
}


TweenMax.to(".loading-screen", 2, {
    delay: 3.6,
    top: "-110%",
    opacity: 0,
    display: "none",
    ease: Expo.easeInOut
});

TweenMax.from(".personal h1", 3, {
    delay: 4,
    opacity: 0,
            y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".personal p", 3, {
    delay: 4.3,
    opacity: 0,
            y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("aside", 3, {
    delay: 4.5,
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut
})
var t1 = new TimelineMax();

t1.from(".ringOne", 1, {
    delay: 0.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".ringTwo", 1, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

