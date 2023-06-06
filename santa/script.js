window.addEventListener('load', (event) => {
  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[0].offsetWidth;

  for (let i = 0; i < modelViewer.length; i++) {
    modelViewer[i].style.height = width + 'px';
  }
});

window.addEventListener("resize", function () {
  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[0].offsetWidth;

  for (let i = 0; i < modelViewer.length; i++) {
    modelViewer[i].style.height = width + 'px';
  }
});