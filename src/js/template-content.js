// Show the modal on page load if the cookie is not set
window.addEventListener('DOMContentLoaded', function() {
  var cookieAccepted = getCookie('termsAccepted');
  if (cookieAccepted !== 'true') {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    });
    myModal.show();
  }
});

// Set the cookie value when the "Accept" button is clicked
document.getElementById('acceptBtn').addEventListener('click', function() {
  setCookie('termsAccepted', 'true', 365);
});

// Utility functions for getting and setting cookies
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
