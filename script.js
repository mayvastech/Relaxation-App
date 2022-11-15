// Grabbed container and text paragraph
const container = document.getElementById("container");
const text = document.getElementById("text");

// 3s breathe + 1.5s hold + 3s exhale
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();
function breatheAnimation() {
  text.innerHTML = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breathe out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);