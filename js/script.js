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
document.querySelectorAll('.img-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-img-1').src = src;
  });
});

document.querySelectorAll('.img-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-img-2').src = src;
  });
});

document.querySelectorAll('.img-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-img-3').src = src;
  });
});