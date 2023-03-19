/* ================== Переключение между вкладками =================== */
const tabs = document.querySelector('.about-me__tabs');
const aboutSection = document.querySelector('.about-me__section');

tabs.addEventListener('click', (event) => {
  // console.log('click');
  // console.log(event.target);
  if(event.target.classList.contains('tab-item') && !event.target.classList.contains('active')){
    tabs.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');

    const section = event.target.getAttribute('data-target');
    // console.log(section);
    aboutSection.querySelector('.tab__content.active').classList.remove('active');
    aboutSection.querySelector(section).classList.add('active');
  }
});


/* ================== Открытие / закрытие портфолио =================== */
const btnClose = document.querySelector('.project-window__close');
const main = document.querySelector('.main');
const picture = document.querySelector('.project-windows__picture img');
const headerPicture = document.querySelector('.project-window__head h3');
const description = document.querySelector('.project-windows__info .description p');
const info = document.querySelector('.project-windows__info');

const projectInformation = (item) => {
  // console.log(item);
  picture.src = item.querySelector('.project__item-box img').src;
  
  headerPicture.innerHTML = item.querySelector('.project__item-title').innerHTML;
  
  description.innerHTML = item.querySelector('.project__item-details .description p').innerHTML;

  info.innerHTML = item.querySelector('.project__item-details').innerHTML;
}

document.addEventListener('click', (event) => {
  if(event.target.classList.contains('view-project')){
    // console.log('click');
    document.querySelector('.project-window').classList.toggle('open');
    main.classList.toggle('out');
    projectInformation(event.target.parentElement);
  }
});

btnClose.addEventListener('click', () => {
  document.querySelector('.project-window').classList.toggle('open');
  main.classList.toggle('out');
});


