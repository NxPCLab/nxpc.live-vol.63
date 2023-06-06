window.addEventListener('load', (event) => {
  let windowWidth = window.innerWidth;
  let width = windowWidth * 0.36 * 0.9;
  let modelViewer = document.querySelector('model-viewer');

  modelViewer.style.height = width + 'px';
});

window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;
  let width = windowWidth * 0.36 * 0.9;
  let modelViewer = document.querySelector('model-viewer');

  modelViewer.style.height = width + 'px';
});