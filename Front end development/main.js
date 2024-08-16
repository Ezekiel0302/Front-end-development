let calcScrollValue = () => {
  let scrollProgress = document.getElementById ("progress");
  let progressValue = document.getElementById ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  let ScrollValue = Math.round((pos * 100) / calcHeight);
  if(pos> 100) {
    scrollProgress.style.display ="grid";
  } else {
    scrollProgress.style.display ="none";
  }
  scrollProgress.addEventListener("click", () => { document.documentElement.scrollTop = 0;

  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;