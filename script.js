function getElementPosition(element) {
  let rect = element.getBoundingClientRect();
  let { top, left, width, height } = rect;
  let paddingTop = parseInt(getComputedStyle(element).paddingTop);
  let paddingLeft = parseInt(getComputedStyle(element).paddingLeft);
  let position = {
    top: window.scrollY + top + paddingTop,
    left: left - paddingLeft,
    width,
    height,
    right: left + width / 4,
    leftP: left - width / 2,
  };
  return position;
}

window.addEventListener('DOMContentLoaded', function () {
  // x-scroll
  let scrollingText = document.querySelectorAll('.scrolling-text');
  for (let i = 0; i < scrollingText.length; i++) {

    scrollingText[i].style.animationDuration = (scrollingText.scrollWidth / 50) + 's';
  }

  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[1].offsetWidth;
  let height = window.innerHeight;

  for (let i = 1; i < modelViewer.length; i++ - 1) {
    modelViewer[i].style.height = width + 'px';
  }
  modelViewer[0].style.height = height - 20 + 'px';

  // stikcerの位置
  let about = document.querySelector('.about h2');
  let stickerAbout = document.querySelector('.sticker-about img');
  let aboutRect = getElementPosition(about);
  stickerAbout.style.top = aboutRect.top - 80 + 'px';
  stickerAbout.style.left = aboutRect.right + 'px';

  let performers = document.querySelector('.performers h2');
  let stickerperformers = document.querySelector('.sticker-performers img');
  let performersRect = getElementPosition(performers);
  stickerperformers.style.top = performersRect.top - 120 + 'px';
  stickerperformers.style.left = performersRect.leftP + 'px';

  // loading
  const loading = document.querySelector('.loading');
  const firstModelViewer = document.querySelector("model-viewer");
  firstModelViewer.addEventListener('load', (event) => {
    setTimeout(function () {
      loading.classList.add('hide');
    }, 1000);
    document.body.style.display = 'block';
  });
});

window.addEventListener("resize", function () {
  let modelViewer = document.querySelectorAll('model-viewer');
  let width = modelViewer[1].offsetWidth;
  let height = window.innerHeight;

  for (let i = 0; i < modelViewer.length; i++) {
    modelViewer[i].style.height = width + 'px';

    modelViewer[0].style.height = height - 20 + 'px';
  }

  let about = document.querySelector('.about h2');
  let stickerAbout = document.querySelector('.sticker-about img');
  let aboutRect = getElementPosition(about);
  stickerAbout.style.top = aboutRect.top - 80 + 'px';
  stickerAbout.style.left = aboutRect.right + 'px';

  let performers = document.querySelector('.performers h2');
  let stickerperformers = document.querySelector('.sticker-performers img');
  let performersRect = getElementPosition(performers);
  stickerperformers.style.top = performersRect.top - 120 + 'px';
  stickerperformers.style.left = performersRect.leftP + 'px';
});