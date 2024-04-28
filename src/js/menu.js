const menuBtn = document.querySelector(".header__btn")
const header = document.querySelector(".header")

const isMenuOpen = () => {
  header.classList.toggle("active")
  
}

menuBtn.addEventListener("click", isMenuOpen)