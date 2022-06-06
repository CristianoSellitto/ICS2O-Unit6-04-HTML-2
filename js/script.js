// Cristiano
// ICS2O-Unit6-04-HTML-2
// June 2 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML-2/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML-2/",
  })
}

/**
 * Shows a favourite number and age using the varibles in the URL on load.
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)
  const favNumber = parseInt(params.get('age'))
  const age = parseInt(params.get('favNumber'))

  if (favNumber && age) {
    document.getElementById("varibles").innerHTML = "<h5>Favourite Number = " + favNumber + "</h5>" + "<h5>Age = " + age + "</h5>"
  } else {
    document.getElementById("varibles").innerHTML = "<h5>Favourite Number = null</h5>" + "<h5>Age = null</h5>"
  }
}
