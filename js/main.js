document.getElementById("button-ticket").addEventListener('click', function myFunction() {
    let name = document.getElementById("input-name");
    let nominativo = name.value;
    console.log(nominativo);

    let km = document.getElementById("input-km");
    let kilometri = parseInt(km.value);

    let age = document.getElementById("input-age").value;

    let bill = (kilometri * 0.27);

    if (age == "minor") {
        bill = (bill - (bill * (17 / 100))).toFixed(2);
        console.log(bill);
    } else if (age == "over") {
        bill = (bill - (bill * (33 / 100))).toFixed(2);
        console.log(bill);
    } else {
        console.log(bill);
    }

    if ((age == "minor") || (age == "over")) {
        document.getElementById("ticket-offer").innerHTML = "Biglietto scontato";
    } else {
        document.getElementById("ticket-offer").innerHTML = "Biglietto Standard";
    }

    document.getElementById("number-carriage").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("cod-cp").innerHTML = Math.floor(Math.random() * 100000) + 10000;
    document.getElementById("user-name").innerHTML = nominativo;
    document.getElementById("price").innerHTML = (bill) + "€";
});