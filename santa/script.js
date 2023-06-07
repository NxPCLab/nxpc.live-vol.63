window.addEventListener('load', (event) => {
  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[1].offsetWidth;
  let height = window.innerHeight;

  for (let i = 1; i < modelViewer.length; i++ - 1) {
    modelViewer[i].style.height = width + 'px';
  }
  modelViewer[0].style.height = height - 20 + 'px';
});

window.addEventListener("resize", function () {

  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[1].offsetWidth;
  let height = window.innerHeight;

  for (let i = 0; i < modelViewer.length; i++) {
    modelViewer[i].style.height = width + 'px';

    modelViewer[0].style.height = height - 20 + 'px';
  }
});

window.addEventListener('DOMContentLoaded', function () {
  var scrollingText = document.querySelectorAll('.scrolling-text');
  scrollingText.style.animationDuration = (scrollingText.scrollWidth / 50) + 's';
});