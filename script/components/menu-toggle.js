let show = true

const lHeader = document.querySelector(".l-header")
const menuToggle = lHeader.querySelector(".menu-toggle")
const menuOne = menuToggle.querySelector(".one")
const menuTwo = menuToggle.querySelector(".two")
const menuThree = menuToggle.querySelector(".three")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
  //  document.menuOne.style.backgroundColor = show ? "#fff" : "var(--font-menu-selected)"

    lHeader.classList.toggle("on", show)
    show = !show
})