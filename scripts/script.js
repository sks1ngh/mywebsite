const sb = document.querySelector(".sideBar");
const cb = document.querySelector("#closeBtn");
const hb = document.querySelector("#hamBtn");
const nav = document.querySelector("#navigation");
const root = document.querySelector(":root");
const splash = document.querySelector(".splash");
const splashgif = document.querySelector("#splash-gif");
const jsicon = document.querySelector("#javascript");
const phn = document.querySelector("#phonenumber");
const jokeBtn = document.querySelector("#newJoke");
const progressbar = document.querySelector("progress");

// function seticon() {
//   let height = jsicon.offsetHeight;
//   let width = jsicon.offsetWidth;
//   root.style.setProperty("--js-icon-height", `${height}px`);
//   root.style.setProperty("--js-icon-width", `${width + 0.5}px`);
// }

function welcome() {
  setTimeout(function () {
    splash.classList.add("display-none");
  }, 6000);
}

function setNavHeight() {
  root.style.setProperty("--nav-height", `${nav.clientHeight + 10}px`);
}

function setNavBottom() {
  root.style.setProperty(
    "--nav-bottom",
    `${nav.getBoundingClientRect().bottom}px`
  );
}

function setimg() {
  splashgif.setAttribute("src", "only-once.gif");
}

function showsidebar() {
  sb.classList.add("hidden");
}

function hidesidebar() {
  sb.classList.remove("hidden");
}

function redirect() {
  let width = document.body.clientWidth;
  if (width < 768) {
    phn.setAttribute("href", "tel:+91-8097119549");
  } else {
    phn.setAttribute("href", "#contact");
  }
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 300;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function highlighter() {
  let windowheight = window.innerHeight;
  let trigger = parseInt(windowheight / 3);
  let trigger2 = trigger;
  let sections = document.querySelectorAll(".reveal");
  for (i = 0; i < sections.length; i++) {
    let currSection = sections[i].id;
    let currSectionPosition = sections[i].getBoundingClientRect().top;
    var navlink = document.querySelector(`a[href="#${currSection}"]`);

    if (currSectionPosition > -trigger && currSectionPosition < trigger) {
      navlink.classList.remove("desktopNavlinks");
      navlink.classList.add("highlightNav");
    } else {
      navlink.classList.remove("highlightNav");
      navlink.classList.add("desktopNavlinks");
    }
  }
}

function progress() {
  let bodyElement = document.querySelector("body");
  let bodyTop = bodyElement.getBoundingClientRect().top;
  let bodyheight = document.body.scrollHeight;
  let display = window.innerHeight;
  let scrollOffset = window.pageYOffset;
  let scrollPercentage = Math.round(
    (scrollOffset * 100) / (bodyheight - display)
  );
  root.style.setProperty("--progress-width", `${scrollPercentage}%`);
}

var rand = Math.floor(Math.random() * 32 + 1);
var temp = rand;
isOver = false;

function newJoke() {
  document.querySelector("#newJoke").innerText = "Fetch me another joke!";
  if (rand < 31) {
    if (isOver == false) {
      document.querySelector("#joke").innerText = joke[rand];
      rand = rand + 1;
      // console.log("Rand value after increment :- " ,rand)
      if (rand == 31) {
        isOver = true;
        rand = 0;
        // console.log("Rand and isover set :- ",rand,isOver)
      }
    } else {
      if (rand < temp) {
        // console.log("Rand inside else :- ",rand)
        document.querySelector("#joke").innerText = joke[rand];
        rand = rand + 1;
      } else {
        // console.log("Rand inside else else :- ",rand)
        document.querySelector("#joke").innerText =
          "Ran out of jokes :( Come back later for more :D";
        document.querySelector("#newJoke").style.display = "none";
      }
    }
  }
}

window.addEventListener("load", welcome);
window.addEventListener("DOMContentLoaded", setNavBottom);
window.addEventListener("DOMContentLoaded", setNavHeight);
window.addEventListener("resize", setNavBottom);
window.addEventListener("load", setimg);
window.addEventListener("resize", setNavHeight);
hb.addEventListener("click", hidesidebar);
cb.addEventListener("click", showsidebar);
window.addEventListener("DOMContentLoaded", redirect);
window.addEventListener("resize", redirect);
window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);
window.addEventListener("DOMContentLoaded", highlighter);
window.addEventListener("scroll", highlighter);
window.addEventListener("scroll", progress);
window.addEventListener("DOMContentLoaded", progress);
jokeBtn.addEventListener("click", newJoke);
