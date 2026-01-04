let homeCount = 0
let guestCount = 0 

let homeCountEl = document.getElementById("home-score")
let guestCountEl = document.getElementById("guest-score")

function homeOnePoint() {
  homeCount += 1;
  homeCountEl.textContent = homeCount;
}

function homeTwoPoint() {
  homeCount += 2;
  homeCountEl.textContent = homeCount;
}

function homeThreePoint() {
  homeCount += 3;
  homeCountEl.textContent = homeCount;
}



function guestOnePoint() {
  guestCount += 1;
  guestCountEl.textContent = guestCount;
}

function guestTwoPoint() {
  guestCount += 2;
  guestCountEl.textContent = guestCount;
}

function guestThreePoint() {
  guestCount += 3;
  guestCountEl.textContent = guestCount;
}

function reset() {
  guestCount = 0;
  homeCount = 0;
  
  guestCountEl.textContent = guestCount;
  homeCountEl.textContent = homeCount;
}