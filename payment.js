var dispData = JSON.parse(localStorage.getItem("information")) || [];
    console.log(dispData);
    dataBase(dispData);

    document.getElementById("form").addEventListener("submit", data)

    function emptyOrNot(credit, name, date, otp) {
        if (credit == "" || name == "" || date == "" || otp == "") {
            alert("Fill all the Fields!");
        }
        else if (otp == 1234) {
            // alert("Payment Successfull.")
            done();
        } else {
            alert("Invalid Details!");
        }
    }

    function done(){
        window.location.href="paymentSuccesFull.html";
    }
    function data() {
        event.preventDefault();
        var credit = document.querySelector("#creditRadio").value;
        var name = document.querySelector("#paypalRadio").value;
        var date = document.querySelector(".inpData2").value;
        var otp = document.querySelector("#newData").value;

        var obj = {
            credit: credit,
            name: name,
            date: date,
            otp: otp
        }
        console.log(obj);
        emptyOrNot(credit, name, date, otp);
    }

    function dataBase(dispData) {
        var tb = document.querySelector("#tb1");
        tb.textContent = "";
        for (var i = 0; i < 1; i++) {
            var elem = dispData[dispData.length - 1];
            var tr1 = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = "Contact";

            var td2 = document.createElement("td");
            td2.textContent = "  " + elem.email;

            var tr2 = document.createElement("tr");
            var td3 = document.createElement("td");
            td3.textContent = "Ship to"

            var td4 = document.createElement("td");
            td4.textContent = "  " + elem.address;

            var tr3 = document.createElement("tr");
            var td5 = document.createElement("td");
            td5.textContent = "Method"

            var td6 = document.createElement("td");
            td6.textContent = "  Standard";
            tr1.append(td1, td2);
            tr2.append(td3, td4);
            tr3.append(td5, td6);
            tb.append(tr1, tr2, tr3);
        }
        // var payButton = document.querySelector("button").addEventListener("click", pivot);

        // function pivot(){

        // }
    }