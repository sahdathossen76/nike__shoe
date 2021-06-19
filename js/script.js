let menu = document.querySelector('#nav__bar');
let navbar = document.querySelector('#nav_bar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
let slides = document.querySelectorAll('.hero__slider');
let index = 0;

function next(){
  slides[index].classList.remove('hero__active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('hero__active');
}

function prev(){
  slides[index].classList.remove('hero__active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('hero__active');
}
