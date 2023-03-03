exports.initGoogleAnalytics = function initGoogleAnalytics () {
  const GA_TRACKING_ID = 'J2FCEQRZJ1'
  const gaScript = document.createElement('script')
  gaScript.src = 'https://www.google-analytics.com/analytics.js'
  document.head.appendChild(gaScript)

  window.ga = (...args) => {
    (ga.q = ga.q || []).push(args)
  }
  ga.l = Date.now()
  ga('create', GA_TRACKING_ID, 'auto')
  ga('send', 'pageview')
}
