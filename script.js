function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

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
