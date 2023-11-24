export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  items: document.querySelectorAll('.h2o-timer'),
  header: document.querySelector('header'),

  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.h2o-mobile-menu'),
  burger: document.querySelector('.h2o-burger'),
  asideMenu: document.querySelector('.h2o-main-aside'),
  slider: document.querySelector('.splide'),
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
}





