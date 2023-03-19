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


/* ================== Открытие портфолио =================== */
document.addEventListener('click', (event) => {
  if(event.target.classList.contains('view-project')){
    // console.log('click');
    document.querySelector('.project-window').classList.toggle('open');
    
  }
});
