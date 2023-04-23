// cart page end


// function clicme(){
    document.querySelector("form").addEventListener("submit", data);
    // form.addEventListener("submit",data);
    // }
    
    function emptyOrNot(email, country, fname, lname, address, apartment, city, state, zip, phone) {
        if (email == "" || country == "" || fname == "" || lname == "" || address == "" || apartment == "" || city == "" || state == "" || zip == "" || phone == "") {
            alert("Fill All Fields")
        }else{
            window.location.href="payment.html";
        }
    
    }
    
    var objArr = JSON.parse(localStorage.getItem("information")) || [];
    // console.log(objArr);
    function data() {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var country = document.getElementById("country").value;
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var address = document.getElementById("bottomGap").value;
        var apartment = document.getElementById("apartment").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zip = document.getElementById("zip").value;
        var phone = document.getElementById("bottomGap").value;
    
        var obj = {
            email: email,
            country: country,
            fname: fname,
            lname: lname,
            address: address,
            apartment: apartment,
            city: city,
            state: state,
            zip: zip,
            phone: phone
        }
        emptyOrNot(email, country, fname, lname, address, apartment, city, state, zip, phone);
        objArr.push(obj);
        console.log(objArr);
        localStorage.setItem("information", JSON.stringify(objArr));
        // window.location.href = "Payment.html";
    }
    
    
    // promo code
    
    
    var cartProduct = JSON.parse(localStorage.getItem("cart-list")) || [];
        // console.log(cartProduct);
        if (cartProduct.length > 0) {
            cartTotal();
            displayCart();
        } else {
            var t = document.createElement("p");
            // t.textContent = "No Items in Cart"
            document.querySelector("#parent").append(t);
        }
    
        function displayCart() {
            cartProduct.map(function (i) {
    
                var image = document.createElement("img");
                image.setAttribute("src", i.img);
                // image.setAttribute("alt", i.name);
                image.setAttribute("class", "infoImg");
                var name = document.createElement("h4");
                name.textContent = i.name;
                var price = document.createElement("p");
                price.textContent = "$ " + "869798";
                price.setAttribute("id", "price");
                var offer = document.createElement("p");
                offer.textContent = "$ " + i.price;
                var box = document.createElement("div");
    
                var div = document.createElement("div");
                box.append(price, offer);
                div.append(image, name, box)
                div.setAttribute("class", "infoInline")
                document.getElementById("tblast").append(div);
            });
        }
    
        var finalAmount = 0;
    
        // console.log(total);
        function cartTotal() {
            var total = cartProduct.reduce(function (acc, currelem) {
                return acc + currelem.strikedoffprice;
            }, 0);
            var div = document.createElement("div");
            div.setAttribute("id", "cart");
    
            var p1 = document.createElement("p");
            // p1.textContent = "Total Cart Value";
    
            var p2 = document.createElement("p");
            // p2.textContent = total;
            // if(finalAmount==0){
            finalAmount = total;
            document.getElementById("total1").textContent = finalAmount;
    
            div.append(p1, p2);
            document.querySelector("body").append(div);
        }
        cartTotal();
        console.log(finalAmount);
        document.getElementById("apply").addEventListener("click", giftCard)
        // {
        //     giftCard();
        // });
    
        function giftCard(){
            var a = document.getElementById("promo").value;
            if(a=="SAVE20"){
                // alert("successefull");
                var total = 0;
                total = (20/100)*finalAmount;
                console.log(finalAmount);
                finalAmount -= total;
                document.getElementById("total1").textContent = finalAmount;
                // displayCart();
            }else{
                alert("Invalid Code!");
            }
        }