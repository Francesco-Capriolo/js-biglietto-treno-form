document.getElementById("button-ticket").addEventListener('click', function myFunction() {
    let name = document.getElementById("input-name");
    let nominativo = name.value;
    console.log(nominativo);

    let km = document.getElementById("input-km");
    let kilometri = parseInt(km.value);

    let age = document.getElementById("input-age").value;

    let bill = (kilometri * 0.27);

    if (age == "minor") {
        console.log(bill - (bill * (17 / 100)));
        bill = (bill - (bill * (17 / 100))).toFixed(2);
        console.log(bill)
    } else if (age == "over") {
        console.log(bill - (bill * (33 / 100)));
        bill = (bill - (bill * (33 / 100))).toFixed(2);
        console.log(bill)
    } else {
        console.log(bill)
    }
    document.getElementById("price").innerHTML = (bill) + "€";

});