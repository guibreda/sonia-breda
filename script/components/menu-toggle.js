let show = true

const lHeader = document.querySelector(".l-header")
const menuToggle = lHeader.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    lHeader.classList.toggle("on", show)
    show = !show
})