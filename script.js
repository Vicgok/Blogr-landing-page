'use strict'
const menuBtn = document.querySelector('.menubtn')
const navMenu = document.querySelector('.navlinkswrapper')
const navLinks = document.querySelectorAll('.navlinkitem > a')

const accordian = (elementArray, closestClass) => {
  elementArray.forEach((link) => {
    link.addEventListener('click', (e) => {
      const clickedLink = e.target.closest(closestClass)
      clickedLink.classList.contains('open')
        ? clickedLink.classList.remove('open')
        : (resetAccordian(), clickedLink.classList.add('open'))
    })
  })

  const resetAccordian = () => {
    navLinks.forEach((link) => {
      const allNavLinks = link.closest(closestClass)
      if (allNavLinks.classList.contains('open'))
        allNavLinks.classList.remove('open')
    })
  }
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  navMenu.classList.toggle('open')
})

accordian(navLinks, '.navlinkitem')
