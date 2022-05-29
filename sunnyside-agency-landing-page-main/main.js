import './style.css'

const toggleMenu = document.getElementById('toggle-menu')
const mobileMenu = document.getElementById('mobile-menu')
const desktopMenu = document.getElementById('desktop-menu')

const showHideMenu = () => {
  mobileMenu.classList.toggle('invisible')
  mobileMenu.classList.toggle('visible')
}

toggleMenu.addEventListener('click', showHideMenu)

const mobileMenuItem = mobileMenu.querySelectorAll('a')
mobileMenuItem.forEach((option) => {
  option.addEventListener('click', () => {
    mobileMenuItem.forEach((option) => option.classList.remove('active'))
    option.classList.add('active')
    setTimeout(() => showHideMenu(), 500)
  })
})


const desktopMenuItem = desktopMenu.querySelectorAll('a')
desktopMenuItem.forEach((option) => {
  option.addEventListener('click', () => {
    desktopMenuItem.forEach((option) => option.classList.remove('active'))
    option.classList.add('active')
    setTimeout(() => showHideMenu(), 500)
  })
})
