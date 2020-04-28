import '../scss/main.scss';
// import './../scss/main.scss';

// Init carousel
const carousel = document.querySelectorAll('.carousel');
M.Carousel.init(carousel, { shift: 60, dist: -280 });

// Tooggel mobile Nav
const toggle = document
  .querySelector('.nav--toggle')
  .addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

// Scroll Navbar
const navBar = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > navBar.offsetHeight + 300) {
    navBar.classList.add('scrollNav');
  } else {
    navBar.classList.remove('scrollNav');
  }
});

// Cursor Fallow Animations
const cursor = document.querySelector('.fallow--curser');

const fallowCursor = (e) => {
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
};

const animateCursor = (e) => {
  const item = e.target.classList;
  if (
    item.contains('logo--img') ||
    item.contains('nav--links') ||
    item.contains('icon') ||
    item.contains('btn')
  ) {
    cursor.classList.add('cursor-animate');
  } else {
    cursor.classList.remove('cursor-animate');
  }
};

window.addEventListener('mousemove', fallowCursor);
window.addEventListener('mouseover', animateCursor);

// Load Screen Animations
const joinWords = (target) => {
  const ele = document.querySelector(target);
  const splitText = ele.textContent
    .split('')
    .map((i) =>
      i === ' '
        ? ` <span class='span--title'>${i}</span>`
        : `<span class='span--title'>${i}</span>`
    )
    .join('');
  ele.innerHTML = splitText;
  return ele;
};

const titleHero = joinWords('.hero--content__title');

// GSAP ANIMATIONS

let controller;
let scene;

const animateHome = () => {
  // Init Controller
  // Elements
  const header = document.querySelector('.header');
  const navLogo = header.querySelector('.nav--logo');
  const heroContent = document.querySelector('.hero--content');
  // GSAP TIMELINE
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'powe2.inOut' },
  });

  tl.fromTo(
    '.load-screen span',
    3,
    { y: '-50%', opacity: 0 },
    { y: '0', opacity: 1, stagger: 0.15 }
  )
    .to('.load-screen', 0.5, { opacity: 0 }, '-=.50')
    .to('body', 0.1, { overflow: 'hidden auto' });
  tl.fromTo(header, 1.7, { top: '-100%' }, { top: '0%' }, '-=1');
  tl.fromTo(navLogo, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1 });
  ///////////  HOME SECTION \\\\\\\\\\\\\\
  // ME IMG DIV
  tl.fromTo(
    heroContent.children[0],
    { scale: 1.3, opacity: 0 },
    { scale: 1, opacity: 1 },
    '-=1'
  );
  // ME IMG
  tl.fromTo(
    heroContent.children[0].firstElementChild,
    { scale: 2.5, opacity: 0 },
    { scale: 1, opacity: 1 },
    '-=1.1'
  );
  // TITLE
  tl.fromTo(
    `.span--title`,
    0.5,
    { display: 'inline-block', opacity: 0, y: '100px' },
    { opacity: 1, y: '0px', stagger: 0.08 },
    '-=.10'
  );
  // SUBTITLE ,BTN,LINKS
  tl.fromTo(
    [heroContent.children[2], heroContent.children[3], heroContent.children[4]],
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1 },
    '-=.20'
  );
  // BTN MOVE Y
  tl.fromTo(heroContent.children[4], { y: '50px' }, { y: '0px' }, '-=.98');
};

const animateSlides = () => {
  // Init Controller
  controller = new ScrollMagic.Controller();
  // Elements
  document.querySelectorAll('.section').forEach((section) => {
    const cont = section.querySelector('.cont');

    //   GSAP TIMELINE
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'powe2.inOut' },
    });
    ////////// ABOUT \\\\\\\\\\\
    cont.classList.contains('about--content') &&
      tl
        .fromTo(
          '.about--content__avatar',
          { x: '-300px', opacity: 0 },
          { x: '0px', opacity: 1 },
          '-=.90'
        )
        .fromTo(
          '.about .about--content__text',
          { x: '300px', opacity: 0 },
          { x: '0px', opacity: 1 },
          '-=.40'
        )
        .fromTo(
          '.about--content__avatar .avatar--img',
          { scale: 2, opacity: 0 },
          { scale: 1, opacity: 1 },
          '-=.90'
        )
        .to('.about--content__avatar', { overflow: 'visible' })
        .fromTo(
          ['.about .email--box', '.about .about--content__links'],
          { y: '20px', opacity: 0 },
          { y: '0px', opacity: 1 },
          '-=1'
        )
        .fromTo(
          '.about .btn',
          { y: '20px', opacity: 0 },
          { y: '0px', opacity: 1 }
        );
    ///////// PORTFOLIO \\\\\\\\\\\
    cont.classList.contains('p-content') &&
      tl
        .fromTo(
          '.portfolio .title',
          { y: '-200px', opacity: 0 },
          { y: '0px', opacity: 1 }
        )
        .fromTo(
          '.portfolio--content__card--screens',
          { x: '-300px', opacity: 0 },
          { x: '0px', opacity: 1 },
          '-=.85'
        )
        .fromTo(
          '.portfolio--content__card--info',
          { x: '300px', opacity: 0 },
          { x: '0px', opacity: 1 },
          '-=.85'
        )
        .fromTo(
          [
            '.portfolio--content__card--screens .tablet',
            '.portfolio--content__card--screens .laptop',
          ],
          { opacity: 0, transformOrigin: 'bottom', scale: 0 },
          { opacity: 1, scale: 1 },
          '-=.80'
        );
    ////////// SKILLS \\\\\\\\\\\\\
    cont.classList.contains('skills--content') &&
      tl
        .fromTo(
          '.skills .title',
          { y: '-200px', opacity: 0 },
          { y: '0px', opacity: 1 }
        )
        .fromTo(
          '.skills--tabs__tab',
          { opacity: 0, scale: 0.2 },
          { opacity: 1, scale: 1, stagger: 0.1 }
        );
    ////////// CONTACT \\\\\\\\\\\\\
    cont.classList.contains('contact--content') &&
      tl
        .fromTo(
          '.contact .title',
          { y: '-200px', opacity: 0 },
          { y: '0px', opacity: 1 }
        )
        .fromTo(
          '.contact--content__boxes--box',
          { opacity: 0, x: '-300px' },
          { opacity: 1, x: '0px', stagger: 0.15 },
          '-=.95'
        )
        .fromTo(
          '.contact--form__group',
          { opacity: 0, x: '300px' },
          { opacity: 1, x: '0px', stagger: 0.15 },
          '-=.95'
        )
        .fromTo(
          '.contact--links',
          { opacity: 0, x: '50px' },
          { opacity: 1, x: '0px' },
          '-=.95'
        )
        .fromTo(
          '.contact .btn',
          { opacity: 0, x: '-50px' },
          { opacity: 1, x: '0px' },
          '-=.95'
        );

    // Create About Scene
    scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.8,
      reverse: false,
    })
      .setTween(tl)
      .addTo(controller);
  });
};
const activeNav = () => {
  // Init Controller
  controller = new ScrollMagic.Controller();
  // Elements
  document.querySelectorAll('section').forEach((section) => {
    //   GSAP TIMELINE
    const tl = gsap.timeline({
      defaults: { duration: 0.1, ease: 'powe2.inOut' },
    });

    //   HOME
    addLinkClass(section.id, 'home', tl);
    //   ABOUT
    addLinkClass(section.id, 'about', tl);
    //   PORTFOLIO
    addLinkClass(section.id, 'portfolio', tl);
    //   SKILLS
    addLinkClass(section.id, 'skills', tl);
    //   CONTACT
    addLinkClass(section.id, 'contact', tl);

    // Create About Scene
    scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });
};

// CALL GSAP;
animateHome();
animateSlides();
activeNav();

function addLinkClass(id, target, tl) {
  id === target
    ? tl.to(`.nav--container a[href='#${target}']`, {
        className: '+=nav--links active',
      })
    : tl.to(`.nav--container a[href='#${target}']`, {
        className: '+=nav--links',
      });
}
