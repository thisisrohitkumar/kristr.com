const closeBtn = document.querySelector('#close')
const openBtn = document.querySelector('#open')

openBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('#mobile-nav')
    mobileNav.style.right = '0'
})

closeBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('#mobile-nav')
    mobileNav.style.right = '-100%'
})