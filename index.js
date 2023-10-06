//// Nav-bar click menu for mobile ////

$(document).ready(
  $('.side-icon').click(() => {
    $('.nav-item').toggleClass('visible')
    $('header').toggleClass('height')
  })
)
