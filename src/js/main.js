/* eslint-disable no-undef, no-unused-vars */
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import allPage from './allPages'
import contentPage from './contentPage'

document.addEventListener('DOMContentLoaded', () => {
  allPage.initialize()
  contentPage.initialize()
})

let resizeTimer

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    allPage.initialize()
  }, 250)
})
