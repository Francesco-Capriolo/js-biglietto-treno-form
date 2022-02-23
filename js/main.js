document.getElementById("button-ticket").addEventListener('click', function () {
    let name = document.getElementById("input-name").value;

    let km = document.getElementById("input-km");
    let kilometri = parseFloat(km.value);

    let age = document.getElementById("input-age").value;

    let bill = (kilometri * 0.27);

    if ((isNaN(kilometri)) || !(isNaN(name))) {
        document.getElementById("user-name").innerHTML = "non sono delle parole";
        document.getElementById("price").innerHTML = "I km non esistono";
    } else {
        if (age == "minor") {
            bill = (bill - (bill * (17 / 100))).toFixed(2);
        } else if (age == "over") {
            bill = (bill - (bill * (33 / 100))).toFixed(2);
        } else {
            bill = bill.toFixed(2);
        }
        document.getElementById("user-name").innerHTML = name;
        document.getElementById("price").innerHTML = (bill) + "€";
        if ((age == "minor") || (age == "over")) {
            document.getElementById("ticket-offer").innerHTML = "Biglietto scontato";
        } else {
            document.getElementById("ticket-offer").innerHTML = "Biglietto Standard";
        }

        document.getElementById("number-carriage").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("cod-cp").innerHTML = Math.floor(Math.random() * 100000) + 10000;
    }

    document.getElementById('input-name').value = "";
    document.getElementById('input-km').value = "";
    document.getElementById("input-age").value = "minor";
});

document.getElementById("button-reset").addEventListener('click', function () {
    document.getElementById("user-name").innerHTML = "";
    document.getElementById("ticket-offer").innerHTML = "";
    document.getElementById("number-carriage").innerHTML = "";
    document.getElementById("cod-cp").innerHTML = "";
    document.getElementById("price").innerHTML = "";
});