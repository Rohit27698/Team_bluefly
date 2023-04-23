//for blackslider
var slideInd = 0;
slideP();
function slideP(){
    var i;
    var x = document.querySelectorAll(".slidePara");
    console.log(x);
    for(i = 0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideInd++;
    if(slideInd>x.length){
        slideInd = 1;
    }
    x[slideInd-1].style.display = "block";
    setTimeout(slideP,2000);
}
// for cat sec
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const slideMenu = document.querySelector('.slide-menu');

openButton.addEventListener('click', () => {
  slideMenu.style.left = '0';
});

closeButton.addEventListener('click', () => {
  slideMenu.style.left = '-300px';
});
function hideButton() {
  const openButton = document.querySelector('.open-button');
  openButton.style.display = 'none';

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', showButton);
}

function showButton() {
  const openButton = document.querySelector('.open-button');
  openButton.style.display = 'block';
}