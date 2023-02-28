/* eslint-disable no-undef, no-unused-vars */
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// Function to estimate the reading time for an article
function estimateReadingTime () {
  const content = document.querySelector('main')
  const wordsPerMinute = 200 // Adjust this value to fit your average reading speed

  const text = content.textContent.trim()
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return readingTime
}

// Function to update the reading time in the DOM
function updateReadingTime () {
  const readingTimeSpan = document.querySelector('#readingTime')
  const readingTime = estimateReadingTime()
  readingTimeSpan.textContent = `${readingTime} min read`
}

// Call the function when the page has finished loading
document.addEventListener('DOMContentLoaded', updateReadingTime)

// Initialize Google Analytics tracking
function initGoogleAnalytics () {
  const GA_TRACKING_ID = 'J2FCEQRZJ1'
  const gaScript = document.createElement('script')
  gaScript.src = 'https://www.google-analytics.com/analytics.js'
  document.head.appendChild(gaScript)

  window.ga = function (...args) {
    (ga.q = ga.q || []).push(args)
  }
  ga.l = Date.now()
  ga('create', GA_TRACKING_ID, 'auto')
  ga('send', 'pageview')
}

function calculateBannerHeight () {
  const banner = document.querySelector('[role="banner"]')
  const bannerHeight = banner.offsetHeight
  const scrollOffset = `${(bannerHeight / 16)}em` // convert to em

  // Set the padding top of .scroll-offset to the banner height
  const scrollOffsetEls = document.querySelectorAll('.scroll-offset')
  for (const el of scrollOffsetEls) {
    el.style.paddingTop = `${bannerHeight}px`
    el.style.marginTop = '-2em'
  }

  // Set the margin top of the body to the banner height
  document.body.style.marginTop = `${bannerHeight}px`
}

function generateAnchorLinks () {
  const headings = document.querySelectorAll('main :is(h1, h2, h3, h4, h5, h6)')
  const linksContainer = document.createElement('nav')
  const headingLevels = {}

  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1))
    const link = document.createElement('a')
    let id = heading.id || heading.textContent.replace(/\s/g, '-').toLowerCase()
    if (document.getElementById(id)) {
      let index = 1
      while (document.getElementById(`${id}-${index}`)) {
        index++
      }
      id = `${id}-${index}`
    }

    heading.id = id

    const linkText = heading.textContent.length > 15 ? heading.textContent.substring(0, 15) + '...' : heading.textContent
    link.textContent = linkText
    link.href = `#${id}`
    link.setAttribute('data-target', `#${id}`)
    link.classList.add('nav-link', 'text-truncate')

    if (!headingLevels[level]) {
      const list = document.createElement('ul')
      list.classList.add('nav', 'nav-pills', 'flex-column')
      headingLevels[level] = list
      linksContainer.appendChild(list)
    }

    const listItem = document.createElement('li')
    listItem.classList.add('nav-item')
    listItem.appendChild(link)
    headingLevels[level].appendChild(listItem)
  })

  linksContainer.classList.add('anchor-links')
  const sidebarMenu = document.querySelector('#sidebarMenu')
  sidebarMenu.appendChild(linksContainer)

  // Add click event listener to the first nav item
  const firstNavItem = sidebarMenu.querySelector('.nav-link:first-of-type')
  firstNavItem.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  // Set tabindex attribute for nav links
  const navLinks = sidebarMenu.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', '0')
  })
}

function addScrollOffsetClass () {
  const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')
  headings.forEach(heading => {
    heading.classList.add('scroll-offset')
  })
}

function setActiveBreadcrumb () {
  const title = document.title
  const separatorIndex = title.indexOf('|')
  const pageTitle = separatorIndex !== -1 ? title.substring(separatorIndex + 1).trim() : title.trim()
  const activeBreadcrumb = document.querySelector('.breadcrumb-item.active')
  if (activeBreadcrumb) {
    activeBreadcrumb.textContent = pageTitle
  }
}
const initializePage = () => {
  setActiveBreadcrumb()
  generateAnchorLinks()
  addScrollOffsetClass()
  calculateBannerHeight()
}

// Call the function when the page has finished loading
window.addEventListener('load', initGoogleAnalytics)

document.addEventListener('DOMContentLoaded', initializePage)

window.addEventListener('resize', calculateBannerHeight)

const targetElements = {} // Cache for target elements

// Cache the target elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('#sidebarMenu a.nav-link')
  links.forEach(link => {
    const targetId = link.dataset.target
    targetElements[targetId] = document.querySelector(targetId)
  })
})

// Define a function to update the active class and scroll to the target element
function updateActiveClassAndScroll () {
  const fromTop = window.scrollY + 60 // Add an offset to the scroll position
  let currentActiveLink = null

  for (const [targetId, targetElement] of Object.entries(targetElements)) {
    const link = document.querySelector(`#sidebarMenu a.nav-link[data-target="${targetId}"]`)
    if (targetElement.offsetTop <= fromTop && targetElement.offsetTop + targetElement.offsetHeight > fromTop) {
      currentActiveLink = link
    }
    link.classList.toggle('active', currentActiveLink === link)
  }
}

// Add scroll event listener using requestAnimationFrame to debounce the event
let scrollAnimationFrame = null
window.addEventListener('scroll', function () {
  if (!scrollAnimationFrame) {
    scrollAnimationFrame = window.requestAnimationFrame(function () {
      updateActiveClassAndScroll()
      scrollAnimationFrame = null
    })
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('#sidebarMenu a.nav-link')
  links.forEach(link => {
    const targetId = link.dataset.target
    targetElements[targetId] = document.querySelector(targetId)
  })

  // Set the active class on the first nav item in the sidebarMenu
  const firstNavItem = document.querySelector('#sidebarMenu a.nav-link:first-of-type')
  firstNavItem.classList.add('active')
  updateActiveClassAndScroll()
})

// Add click event listeners to each link
const links = document.querySelectorAll('#sidebarMenu a.nav-link')
links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault() // prevent default behavior of clicking on a link
    const targetId = this.dataset.target // get the target ID from the data-target attribute
    const targetElement = targetElements[targetId] // get the target element from the cache
    targetElement.scrollIntoView({ behavior: 'smooth' }) // scroll to the target element
  })
})
