// for header transparent to black

let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
         header.classList.toggle('bg' , window.scrollY > 0);
});