let homeCount = 0
let guestCount = 0 

let homeCountEl = document.getElementById("home-score")
let guestCountEl = document.getElementById("guest-score")

function addPoints(teams, pointz) {
    if (teams === "home") {
        homeCount += pointz;
        homeCountEl.textContent = homeCount;
    }

    if (teams === "guest") {
        guestCount += pointz;
        guestCountEl.textContent = guestCount;
    }
}

function homeOnePoint() {
  addPoints("home", 1);
}

function homeTwoPoint() {
  addPoints("home", 2);
}

function homeThreePoint() {
  addPoints("home", 3);
}



function guestOnePoint() {
  addPoints("guest", 1);
}

function guestTwoPoint() {
  addPoints("guest", 2);
}

function guestThreePoint() {
  addPoints("guest", 3);
}

function reset() {
  guestCount = 0;
  homeCount = 0;
  
  guestCountEl.textContent = guestCount;
  homeCountEl.textContent = homeCount;
}