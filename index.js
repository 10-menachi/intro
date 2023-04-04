const menu = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-times")
const body = document.querySelector("body")
const mobile_menu = document.querySelector(".mobile-menu")

menu.addEventListener("click", () => {
  mobile_menu.classList.add("active")
})

close.addEventListener("click", () => {
  mobile_menu.classList.remove("active")
})
