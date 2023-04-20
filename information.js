document.querySelector("form").addEventListener("submit", data);
// form.addEventListener("submit",data);
// }

function emptyOrNot(email, country, fname, lname, address, apartment, city, state, zip, phone) {
    if (email == "" || country == "" || fname == "" || lname == "" || address == "" || apartment == "" || city == "" || state == "" || zip == "" || phone == "") {
        alert("Fill All Fields")
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
    window.location.href = "Payment.html";
}