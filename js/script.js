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

// Header visibility on scroll
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("header").classList.add("header__scroll__up");
        document.getElementById("header").classList.remove("header__scroll__down");
        document.getElementById("mobile__header").classList.add("mobile__header__scroll__up");
        document.getElementById("mobile__header").classList.remove("mobile__header__scroll__down");
    } else {
        // Scroll up
        document.getElementById("header").classList.add("header__scroll__down");
        document.getElementById("header").classList.remove("header__scroll__up");
        document.getElementById("mobile__header").classList.add("mobile__header__scroll__down");
        document.getElementById("mobile__header").classList.remove("mobile__header__scroll__up");
    }
    
    lastScrollTop = currentScroll;
});

