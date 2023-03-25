exports.initialize = function () {
  updateReadingTime()
  generateTOC()
  setActiveBreadcrumb()
}

function updateReadingTime (wordsPerMinute = 200) {
  const readingTimeSpan = document.querySelector('#readingTime')
  if (!readingTimeSpan) return // check if the element is in the page
  const readingTime = estimateReadingTime()
  readingTimeSpan.textContent = `${readingTime} min read`
}

function estimateReadingTime () {
  const content = document.querySelector('main')
  const wordsPerMinute = 200 // Adjust this value to fit your average reading speed

  const text = content.textContent.trim()
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  const readingTimeSpan = document.querySelector('#readingTime')
  if (readingTimeSpan) {
    readingTimeSpan.textContent = `${readingTime} min read`
  }

  return readingTime
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

function generateTOC () {
  const tocMenu = document.querySelector('#toc_menu')
  if (!tocMenu) {
    return // Exit if tocMenu is not found
  }

  const sections = document.querySelectorAll('main section')
  const linksContainer = document.createElement('nav')
  linksContainer.classList.add('anchor-links')

  const headingLevels = {}

  sections.forEach((section) => {
    const heading = section.querySelector('h1, h2, h3, h4, h5, h6')
    if (heading) {
      const level = parseInt(heading.tagName.charAt(1))
      const id = section.id || heading.textContent.replace(/\s/g, '-').toLowerCase()
      const linkText = heading.textContent.length > 15 ? heading.textContent.substring(0, 15) + '...' : heading.textContent
      const link = createLink(id, linkText)

      addLinkToLevel(headingLevels, level, link, linksContainer)
    }
  })

  addLinksContainerToSidebarMenu(linksContainer)
  addClickEventListenerToFirstNavItem()
  setTabindexAttributeForNavLinks()

  const links = linksContainer.querySelectorAll('a')
  const scrollSpy = () => {
    const fromTop = window.scrollY + 80 // Add offset for fixed header
    links.forEach((link) => {
      const section = document.querySelector(link.hash)
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
  window.addEventListener('scroll', scrollSpy)

  scrollSpy() // Highlight correct link when page loads
}

function createLink (id, linkText) {
  const link = document.createElement('a')
  link.textContent = linkText
  link.href = `#${id}`
  link.setAttribute('data-target', `#${id}`)
  link.classList.add('nav-link', 'text-truncate')
  return link
}

function addLinkToLevel (headingLevels, level, link, linksContainer) {
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
}

function addLinksContainerToSidebarMenu (linksContainer) {
  const sidebarMenu = document.querySelector('#toc_menu')
  sidebarMenu.appendChild(linksContainer)
}

function addClickEventListenerToFirstNavItem () {
  const sidebarMenu = document.querySelector('#toc_menu')
  const firstNavItem = sidebarMenu.querySelector('.nav-link:first-of-type')
  firstNavItem.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

function setTabindexAttributeForNavLinks () {
  const navLinks = document.querySelectorAll('#toc_menu .nav-link')
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', '0')
  })
}

document.getElementById("shareButton").addEventListener("click", function() {
  // Code to handle the button click event goes here
});
