let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});


setInterval(() => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    document.body.style.background = `rgba(${r}, ${0}, ${0},.4)`;

}, 2000);


const satu = document.getElementById('1');
const dua = document.getElementById('2');
const tiga = document.getElementById('3');
const empat = document.getElementById('4');
const lima = document.getElementById('5');
const enam = document.getElementById('6');
const tujuh = document.getElementById('7');
const delapan = document.getElementById('8');
const sembilan = document.getElementById('9');
const sepuluh = document.getElementById('10');
const sebelas = document.getElementById('11');
const duabelas = document.getElementById('12');

  

  setTimeout(function(){
    satu.innerText = 'T';
  },500);
  setTimeout(function(){
    dua.innerText = 'e';
  },700);
  setTimeout(function(){
    tiga.innerText = 'r';
  },900);
  setTimeout(function(){
    empat.innerText = 'i';
  },1100);
  setTimeout(function(){
    lima.innerText = 'm';
  },1300);
  setTimeout(function(){
    enam.innerText = 'a';
  },1500);
  setTimeout(function(){
    tujuh.innerText = " ";
  },1700);
  setTimeout(function(){
    delapan.innerText = 'K';
  },1900);
  setTimeout(function(){
    sembilan.innerText = 'a';
  },2100);
  setTimeout(function(){
    sepuluh.innerText = 's';
  },2300);
  setTimeout(function(){
    sebelas.innerText = 'i';
  },2500);
  setTimeout(function(){
    duabelas.innerText = 'h';
  },2700);