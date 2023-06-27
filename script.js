function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Listening to the video element
const clip = document.querySelectorAll(".file");
for (let i = 0; i < clip.length; i++) {
  /* Adding the event listeners on the video to play/pause the video. */
  clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
  });

  /* Applying the mouse out event to pause the video */
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}
const clip_1 = document.querySelectorAll(".file-1");
for (let i = 0; i < clip_1.length; i++) {
  /* Adding the event listeners on the video to play/pause the video. */
  clip_1[i].addEventListener("mouseover", function (e) {
    clip_1[i].play();
  });

  /* Applying the mouse out event to pause the video */
  clip_1[i].addEventListener("mouseout", function (e) {
    clip_1[i].pause();
  });
}
window.addEventListener("scroll", reveal);

// Connecting to google sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz1RKTvWhBQKCv_by9DaBoblfVtZOlvnP4LBQQUqcZEtQBoqwWSxDGALxAE65HOyIyF/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//Dynamic Text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "a Coding Enthusiast",
  "a Front-End Developer ",
  "an Open Source Contributer",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//Video
window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
