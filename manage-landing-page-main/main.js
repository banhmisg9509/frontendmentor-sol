import './style.css'

const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const list = document.getElementById('list')
const controls = document.querySelectorAll('#controls button')

menuBtn.addEventListener('click', function () {
  this.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

function changeItem(idx) {
  list.style.transform = `translate(-${idx * 443}px)`
}

controls.forEach((control) => {
  control.addEventListener('click', function () {
    controls.forEach((control) => control.classList.remove('bg-brightRed'))
    this.classList.add('bg-brightRed')
    const idx = Array.from(controls).findIndex((control) => control === this)
    changeItem(idx)
  })
})
