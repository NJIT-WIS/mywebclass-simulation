// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' // eslint-disable-line no-unused-vars
window.onload = function () {
    // Replace "GA_TRACKING_ID" with your own Google Analytics tracking ID
    const GA_TRACKING_ID = "J2FCEQRZJ1";

    // Insert the Google Analytics tracking script
    (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
            i[r] ||
            function () {
                (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
    );

    // Set the tracking ID
    ga("create", GA_TRACKING_ID, "auto");

    // Send the pageview hit
    ga("send", "pageview");
}