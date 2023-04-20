//code for sliding para
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




// code for sliding pic
var slideIndex = 0;
slidePic();
function slidePic(){
    var i;
    var x = document.querySelectorAll(".slideIt");
    console.log(x);
    for(i = 0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>x.length){
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(slidePic,3000);
}