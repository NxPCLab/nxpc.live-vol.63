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

function mobileCenter(elementID) {
  const element = document.querySelector(elementID);
  if (element != null) {
    element.style.marginLeft = '0%';
    element.style.width = '100vw';
  }
}

function desktopCenter(elementID) {
  const element = document.querySelector(elementID);
  if (element != null) {
    element.style.marginLeft = '31.5vw';
    element.style.width = '36vw';
  }
}

function mobileNav(elementID) {
  const element = document.querySelectorAll(elementID);
  if (elementID == '.info') {
    element[0].style.display = 'none';
    element[1].style.display = 'flex';
  } else if (elementID == '.time-table') {
    element[0].style.display = 'none';
  }
}

function desktopNav(elementID) {
  const element = document.querySelectorAll(elementID);
  if (elementID == '.info') {
    element[0].style.display = 'flex';
    element[1].style.display = 'none';
  } else if (elementID == '.time-table') {
    element[0].style.display = 'flex';
  }
}

function scrollToElement(elementId) {
  const element = document.querySelector(elementId);
  if (element != null) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('DOMContentLoaded', function () {
  let windowWidth = window.innerWidth;
  let body = document.querySelector('body');
  let mobile = document.querySelectorAll('.mobile');

  if (windowWidth < 981) {
    mobileNav('.info');
    mobileNav('.time-table');
    mobileCenter('.about');
    mobileCenter('.performers');
    mobileCenter('.credit');

    body.style.backgroundImage = 'url(../img/mobile_bg.png)';
  } else {
    body.style.backgroundImage = 'url(../img/all_bg.png)';
    for (let i = 0; i < mobile.length; i++) {
      mobile[i].style.display = 'none';
    }
  }

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
  let windowWidth = window.innerWidth;
  let desktop = document.querySelectorAll('.desktop');
  let body = document.querySelector('body');
  let mobile = document.querySelectorAll('.mobile');

  if (windowWidth < 981) {
    mobileNav('.info');
    mobileNav('.time-table');
    mobileCenter('.about');
    mobileCenter('.performers');
    mobileCenter('.credit');

    body.style.backgroundImage = 'url(../img/mobile_bg.png)';
  } else {
    body.style.backgroundImage = 'url(../img/all_bg.png)';
    for (let i = 0; i < mobile.length; i++) {
      mobile[i].style.display = 'none';
    }
    desktop[0].style.display = 'block';
    desktop[1].style.display = 'block';
    desktop[2].style.display = 'block';
    desktop[3].style.display = 'flex';
    desktopNav('.info');
    desktopNav('.time-table');
    desktopCenter('.about');
    desktopCenter('.performers');
    desktopCenter('.credit');
  }

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