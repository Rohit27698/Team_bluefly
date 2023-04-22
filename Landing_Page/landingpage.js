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

    
    
    function addToKart(){
        var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
        var obj = {
            img: document.getElementById("img1").src,
            para1: document.getElementById("para1").textContent,
            para2: document.getElementById("para11").textContent
        };
        console.log(obj);
        cartArr.push(obj);
        console.log(cartArr);
        localStorage.setItem("cart-list",JSON.stringify(cartArr));
    }


    function addToKart1(){
        var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
        var obj = {
            img: document.getElementById("img2").src,
            para1: document.getElementById("para2").textContent,
            para2: document.getElementById("para21").textContent
        };
        console.log(obj);
        cartArr.push(obj);
        console.log(cartArr);
        localStorage.setItem("cart-list",JSON.stringify(cartArr));
    }


    function addToKart2(){
        var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
        var obj = {
            img: document.getElementById("img3").src,
            para1: document.getElementById("para3").textContent,
            para2: document.getElementById("para31").textContent
        };
        console.log(obj);
        cartArr.push(obj);
        console.log(cartArr);
        localStorage.setItem("cart-list",JSON.stringify(cartArr));
    }


    function addToKart3(){
        var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
        var obj = {
            img: document.getElementById("img4").src,
            para1: document.getElementById("para4").textContent,
            para2: document.getElementById("para41").textContent
        };
        console.log(obj);
        cartArr.push(obj);
        console.log(cartArr);
        localStorage.setItem("cart-list",JSON.stringify(cartArr));
    }


    function addToKart4(){
        var cartArr = JSON.parse(localStorage.getItem("cart-list")) || [];
        var obj = {
            img: document.getElementById("img5").src,
            para1: document.getElementById("para5").textContent,
            para2: document.getElementById("para51").textContent
        };
        console.log(obj);
        cartArr.push(obj);
        console.log(cartArr);
        localStorage.setItem("cart-list",JSON.stringify(cartArr));
    }
