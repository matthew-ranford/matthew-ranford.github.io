//// Nav-bar click menu for mobile ////

$(document).ready(
  $('.side-icon').click(() => {
    $('.nav-item').toggleClass('visible')
    $('header').toggleClass('height')
  })
)

//// Onclick for about-section image ////

let images = document.getElementsByClassName('main-image')

function onClick() {
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = changePhoto
  }
}
onClick()

const photoCounts = {
  click: 0,
}

function changePhoto(e) {
  let mainPhoto = e.target

  const id = mainPhoto.id

  if (photoCounts[id] < 6) {
    photoCounts[id]++
    mainPhoto.src = `./images/about-section-image-change/about-section-${photoCounts[id]}.jpg`
  } else if (photoCounts[id] === 6) {
    photoCounts[id] = 0
    mainPhoto.src = `./images/about-section-image-change/about-section-${photoCounts[id]}.jpg`
  }
}
